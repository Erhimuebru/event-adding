import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 5000;
  await app.listen(PORT, () =>
    console.log(`App server is running on port ${PORT}`),
  );
}
bootstrap();
