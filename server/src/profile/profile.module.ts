import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, PrismaService],
  exports:[PrismaService]
})
export class ProfileModule {}
