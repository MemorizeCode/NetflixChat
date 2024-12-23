import { Body, Controller, Get, HttpCode, Post, Req, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO, RefreshDTO, RegisterDTO } from './dto/UserDTO';




@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("/register")
  @HttpCode(200)
  async register(@Body(new ValidationPipe()) body: RegisterDTO, @Req() req: Request) {
    const response  = await this.authService.register(body)
    return response
  }

  @Post("/login")
  @HttpCode(200)
  async login(@Body(new ValidationPipe()) body: LoginDTO, @Req() req) {
    const response = await this.authService.login(body)
    return response
  }

  @Post("/refresh")
  @HttpCode(200)
  async refresh(@Body() body: RefreshDTO) {
    const response = await this.authService.refresh(body)
    console.log(body)
    return response
  }

  @Get("/getMySession")
  @HttpCode(200)
  async getMySession(@Req() req) {
    const user = req.user
    return await this.authService.getMySession(user)
  }

  @Post("/deleteSession")
  @HttpCode(200)
  async deleteSession(@Req() req, @Body() body) {
    const user = req.user
    const {tokenA, tokenB, id} = body
    // return id
    return await this.authService.deleteSession(user, tokenA, tokenB, id)
  }

}
