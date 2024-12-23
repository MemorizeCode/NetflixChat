import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { PrismaService } from 'src/services/prisma.service';
import { SessionGateway } from 'src/services/pusher.service';



@Module({
  controllers: [MovieController],
  providers: [MovieService, PrismaService, SessionGateway],
  exports:[PrismaService,SessionGateway],
})
export class MovieModule {}
