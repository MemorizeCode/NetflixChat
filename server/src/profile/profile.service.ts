import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class ProfileService {
    constructor(private readonly prisma: PrismaService){}

    async getMyProfile(userId: number){
        console.log(userId)
        const user = await this.prisma.user.findUnique({
            where:{
                id: userId
            },
            select:{
                login:true 
            }
        })
        if(user){
            return user
        }
        else{
            return new Error("User not found")
        }
    }
}
