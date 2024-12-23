import { HttpException, HttpStatus, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/services/prisma.service';
import { TokenService } from 'src/services/token.service';
import { SessionGateway } from 'src/services/pusher.service';
import { LoginDTO, RefreshDTO, RegisterDTO } from './dto/UserDTO';



@Injectable()
export class AuthService {

    constructor(private readonly prisma: PrismaService,
        private readonly jwt: TokenService,
        private readonly pusher: SessionGateway,
    ) { }

    async register(body: RegisterDTO) {
        const user = await this.prisma.user.findUnique({
            where: {
                login: body.login,
            }
        })

        if (!user) {
            const newUser = await this.prisma.user.create({
                data: {
                    login: body.login,
                    password: await bcrypt.hash(body.password, 10),
                }
            })
            if (newUser) {
                await this.prisma.profile.create({
                    data: {
                        userId: newUser.id
                    }
                })
                return { message: "Вы создали аккаунт" }
            }
            else {
                throw new HttpException('Ошибка при создании аккаунта', HttpStatus.FORBIDDEN);
            }
        }
        else {
            throw new UnauthorizedException("Юзер уже существует")
        }
    }

    
    async login(body: LoginDTO) {

        const user = await this.prisma.user.findUnique({
            where: {
                login: body.login,
            },
            select:{
                id: true,
                login: true,
                role: true,
                password: true,
            }
        })

        if(!body.login.length ){
            throw new HttpException('Логин не может быть пустым', HttpStatus.FORBIDDEN);
        }

        if (!user) {
            throw new UnauthorizedException('User not found')
        }

        const isMatch = await bcrypt.compare(body.password, user.password);
        if (!isMatch) {
            throw new UnauthorizedException("Пароль не верный")
        }

        const data = {
            id: user.id,
            login: user.login
        }

        const accesToken = await this.jwt.generateAccessToken(data)
        const refreshToken = await this.jwt.generateRefreshToken(data)
        return { message: "Вы вошли", accesToken: accesToken, refreshToken: refreshToken, role: user.role }
    }

    async refresh(token: RefreshDTO) {
        const data = await this.jwt.verifyTokenRefresh(token.token)

   
        if (data) {
            const id = data.id
            const user = await this.prisma.user.findUnique({
                where: {
                    id: id
                }
            })
            if (!user) {
                throw new HttpException('Пользователь не найден', HttpStatus.FORBIDDEN);
            }

            const newData = {
                id: id,
            login: user.login

            }
            const accesToken = await this.jwt.generateAccessToken(newData)
            const refreshToken = await this.jwt.generateRefreshToken(newData)

            return { message: "Успешно, новые токены", accesToken: accesToken, refreshToken: refreshToken, role: user.role }
        }
        // return false
        throw new HttpException('Сессия истекла', HttpStatus.FORBIDDEN);
    }

    async getMySession(user){
        const mySessions = await this.prisma.token.findMany({
            where:{
                userId: user.id
            }
        })
        if(mySessions){
            return mySessions
        }
    }

    async deleteSession(user, tokenA, tokenB, id) {
        console.log("delete: ", id)
        // return id
 
        const findToken = await this.prisma.token.findUnique({
            where:{
                userId: Number(user.id),
                // tokenRefresh: tokenB
                id:Number(id)
            }
        })
        if(findToken){
            this.pusher.handleSessionDeleted({user:id, token:findToken.tokenRefresh})
            // this.pusher.trigger(String(user.id), 'sessionDelete', {data:findToken.tokenRefresh})
            await this.prisma.token.delete({
                where:{
                    id: findToken.id
                }
            })

            return {data:findToken}
        }
    }
}
