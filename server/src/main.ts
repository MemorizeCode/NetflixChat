import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import { LoopService } from './services/loop.service';
import { BestLoggerService } from './services/logger.service';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  
  const loop = app.get(LoopService)
  

  loop.startLoop()
  app.enableCors();
  // app.use(compression())
  await app.listen(5000);
}
bootstrap(); 
 