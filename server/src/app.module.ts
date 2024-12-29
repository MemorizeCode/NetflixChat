import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './middleware/auth.middleware';
import { MovieModule } from './movie/movie.module';
import { ProfileModule } from './profile/profile.module';
import { AdminModule } from './admin/admin.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '/uploads', '..'),
    }),
    AuthModule, MovieModule, ProfileModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(
      {path: '/api/movie/getWatchVideo', method:RequestMethod.GET},
      {path: '/api/movie/createRoom', method:RequestMethod.POST},
      {path: '/api/movie/getRoom/:id', method:RequestMethod.GET},
      {path: '/api/movie/createMsg', method:RequestMethod.POST},
      {path: '/api/movie/getMsg/:id', method:RequestMethod.GET},
      {path: '/api/user/getUser', method:RequestMethod.GET},
      {path: '/api/profile/getMyProfile', method:RequestMethod.GET},
      {path: '/api/auth/getMySession', method:RequestMethod.GET},
      {path: '/api/auth/deleteSession', method:RequestMethod.POST},
    )
  }
}
