"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const body_parser_1 = require("body-parser");
const multer = require("multer");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const PORT = 5000;
    app.use((0, body_parser_1.json)());
    app.use((0, body_parser_1.urlencoded)({ extended: true }));
    app.use(multer().any());
    await app.listen(PORT, () => console.log(`App server is running on port ${PORT}`));
}
bootstrap();
//# sourceMappingURL=main.js.map