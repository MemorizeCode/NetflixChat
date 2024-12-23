import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/services/prisma.service';
import { TokenService } from 'src/services/token.service';

import { SessionGateway } from 'src/services/pusher.service';
import { LoopService } from 'src/services/loop.service';


@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, TokenService,SessionGateway, LoopService],
  exports: [TokenService,SessionGateway,PrismaService]
})
export class AuthModule {}
