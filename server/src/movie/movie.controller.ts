import { Body, Controller, Get, HttpCode, Param, Post, Query, Req,Res  } from '@nestjs/common';
import { MovieService } from './movie.service';
import {Response} from 'express';
import { join } from 'path';
@Controller('/api/movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {

  }
    //мои видео

  @Get("/getWatchVideo")
  async getWatchVideo(@Req() req, @Query() query){
    const {id} = req.user
    const result = await this.movieService.getWatchVideo(id,query)
    return result;
  }

  @Get("/getRoom/:id")
  @HttpCode(200)
  async getRoom(@Param() param) {
    const {id} = param
    const result = await this.movieService.getRoom(id)
    console.log(result)
    return result;
  }

  @Get("/movie/:id")
  @HttpCode(200)
  async getMovie(@Param() param, @Res() res: Response) {
    const {id} = param
    const result = await this.movieService.streamMovie(id, res); 
    return result;
  }


  @Get("/getMovies")
  @HttpCode(200)
  async getMovies(){
    const result = await this.movieService.getMovies()
    return result;
  }

  @Get("/getMsgRooms/:id")
  @HttpCode(200)
  async getMsg(@Param() param){
    const {id} = param
    const result = await this.movieService.getMsg(id)
    return result;
  }

  @Post("/createRoom")
  @HttpCode(200)
  async createRoom(@Body() body, @Req() req){
    const {id} = req.user
    const result = await this.movieService.createRoom(id,body)
    return result;
  }

  @Post("/createMsg")
  @HttpCode(200)
  async createMsg(@Body() body, @Req() req){
    const {id, login} = req.user
    const result = await this.movieService.createMsg(id, body, login)
    return result;
  }

  @Post("/createWatchFilm")
  @HttpCode(200)
  async createWatchFilm(@Body() body, @Req() req){
    const {id} = req.user
    const result = await this.movieService.createWatchFilm(body,id)
    return result;
  }
}
