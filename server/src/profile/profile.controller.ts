import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('/api/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('/getMyProfile')
  @HttpCode(200)
  async getMyProfile(@Req() req) {
    const {id} = req.user
    const response = await this.profileService.getMyProfile(id)
    return response;
  }
}
