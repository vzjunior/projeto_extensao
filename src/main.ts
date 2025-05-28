import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Permitir requisições do frontend React (ajuste a origem se necessário)
  app.enableCors({
    origin: 'http://localhost:3000', // Porta do seu React
    credentials: true,
  });

  await app.listen(3001); // Porta do backend
}
bootstrap();
