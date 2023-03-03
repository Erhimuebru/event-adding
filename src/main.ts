import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { json, urlencoded } from "body-parser";
import * as multer from "multer";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 5000;
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(multer().any());
  await app.listen(PORT, () =>
    console.log(`App server is running on port ${PORT}`)
  );
}
bootstrap();
