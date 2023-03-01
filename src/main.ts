import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, LoggerService } from "@nestjs/common";
async function bootstrap() {
  let logger = new Logger("Server");
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  logger.log("Server address: http://localhost:3000");
  await app.listen(3000);
}
bootstrap();
