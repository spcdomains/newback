import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Allow requests from all origins
    credentials: true, // Enable credentials (if needed)
  });
  
  app.useGlobalPipes(new ValidationPipe());
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  
  // Setting a timeout of 5 seconds for incoming requests
  // app.use((req, res, next) => {
  //   res.setTimeout(5000, () => {
  //     console.error('Server response timeout exceeded. (5 seconds)');
  //   });
  //   next();
  // });

  await app.listen(process.env.PORT || 3000); // Use process.env.PORT for production or default to 3000
}

bootstrap().then(() => {
  console.log('Nest application is running.');
});
