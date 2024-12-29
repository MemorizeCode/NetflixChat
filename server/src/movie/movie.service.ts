import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { SessionGateway } from 'src/services/pusher.service';
import { join } from 'path';
import { createReadStream } from 'fs';
import { randomRoomId } from 'src/utils/randomRoomId/randomRoomId';
import {Response} from 'express';
@Injectable()
export class MovieService {

    constructor(private readonly prisma: PrismaService, private readonly pusher: SessionGateway){}

    //мои видео
    async getWatchVideo(id,body){
        const movies = await this.prisma.userWatchFilm.findMany({
            where:{
                userId: id
            },
            select:{
                id: true,
                filmId: true,
                film:{
                    select:{
                        id: true,
                        title: true,
                        date: true,
                    }
                },
            },
            take:Number(body.take), 
        })

        const count = await this.prisma.userWatchFilm.count({
            where:{
                userId: id
            }
        })
        return {movies: movies, max:count};
    }


    async createRoom(id,body){
        console.log("createRoom")
            const isFilm = await this.prisma.film.findUnique({
                where:{
                    id: Number(body.filmId)
                }
            })
            
            const response = await this.prisma.userWatchFilm.create({
                data:{
                    userId: id,
                    filmId: Number(body.filmId),
                }
            })
     

            if(isFilm){
                const randomUrlRoom = randomRoomId(body.filmId)
                const createRoom = await this.prisma.room.create({
                    data:{
                        userId: id,
                        filmId: Number(body.filmId),
                        randomUrl:randomUrlRoom
                    },
                    include:{
                        user:{
                            select:{
                                id: true,
                                login: true,
                            }
                        },
                        film:{
                            select:{
                                id: true,
                                title: true,
                            }
                        }
                    }
                })
 

                if(createRoom){
                    return {randomUrlRoom:randomUrlRoom}
                }
            }
            else{
                return new HttpException("Film not found", HttpStatus.NOT_FOUND)
            }
            
    }

    async getMovieById(id: string){
        const splitData = String(id).split("_")[1]
        const film = await this.prisma.film.findUnique({
            where:{
                id: Number(splitData)
            },
            select:{
                url:true
            }
        })
        return film
    }
    
        async streamMovie(id: string, res: Response) {
            try{
                const { url } = await this.getMovieById(id);
                console.log(url)
                const filePath = join(__dirname, '..', 'db', 'movie', url);
                if(filePath){
                    res.setHeader('Content-Type', 'video/mp4'); 
                    res.setHeader('Content-Disposition', 'inline; filename="' + url + '"');
                    const readStream = createReadStream(filePath);
                    readStream.pipe(res);
                }
                return false

            }
            catch(error){
                console.log(error)
            }
          }

    async getRoom(id: number){
        const isRoom = await this.prisma.room.findFirst({
            where:{
                randomUrl:String(id)
            }
        })
        if(isRoom){
            const splitData = String(id).split("_")[1]
            const film = await this.prisma.film.findUnique({
                where:{
                    id: Number(splitData)
                }
            })
            return {room: film}
        }
        else{
            return {message:"No Room found"}
        }
    }

    async getMovies(){
        const movies =  await this.prisma.film.findMany()
        return movies
    }

    async createMsg(id: number,body,login){
        const room = await this.prisma.room.findFirst({
            where:{
                randomUrl: String(body.roomId)
            }
        })
        if(room){
            try{
                const msg = await this.prisma.message.create({
                    data:{
                        userId: id ? id : null,
                        title: body.title,
                        roomId: room.id,
                        name: login ? login : "Anonymous"
                    }
                })
                // this.pusher.trigger(body.roomId, 'message', {id:0,title:body.title, name: login ? login : "Anonymous"})
                if(msg){
                    this.pusher.getRoomMessage(msg, body.roomId)
                    return {message:"Message send"}
                }
                else{
                    return new HttpException("Error create message", HttpStatus.INTERNAL_SERVER_ERROR)
                }
            }
            catch(e){
                return new HttpException(e.message, HttpStatus.CONFLICT)
            }
        }
        else{
            return {message:"Room not found"}
        }
    }

    async getMsg(roomId){
        const room = await this.prisma.room.findFirst({
            where:{
                randomUrl: String(roomId)
            }
        })
        if(room){
            const roomMessages = await this.prisma.message.findMany({
                where:{
                    roomId: room.id
                },
                include:{
                    User:{
                        select:{
                            id: true,
                            login: true,
                        }
                    }
                }
            })
            return {messagesRoom: roomMessages}
        }
        return {message: "Room not found"}
    }

    async createWatchFilm(body, id){
        const isFilm = await this.prisma.film.findUnique({
            where:{
                id: Number(body.filmId)
            }
        })
        if(isFilm){
            const userWatchFilm = await this.prisma.userWatchFilm.findFirst({
                where:{
                    userId: id,
                    filmId: Number(body.filmId)
                }
            })
            if(!userWatchFilm){
                const watchFilm = await this.prisma.userWatchFilm.create({
                    data:{
                        userId: id,
                        filmId: Number(body.filmId)
                    }
                })

            }
            else{
                return new HttpException("Error create watch film", HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
        else{
            return {message:"Film not found"}
        }
    }

    async getMainMoive(){
        const movies = await this.prisma.film.findMany({
            take: 1
        })
        if(movies){
            return movies[0]
        }
        return "фильмо нема брат("
    }

    async getMovieByIdTo(id){
        const movie = await this.prisma.film.findUnique({
            where:{
                id: Number(id)
            }
        })
        return movie
    }
}
