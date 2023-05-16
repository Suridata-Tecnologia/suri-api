import { Module } from '@nestjs/common';
import { UserModule } from './infrastructure/modules/user.module';
import { UserController } from './application/controllers/user.controller';
import { UserService } from './domain/services/user.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageModule } from './infrastructure/modules/language.module';
import { LanguageController } from './application/controllers/language.controller';
import { LanguageService } from './domain/services/language.service';
import { CacheModule } from './cache/cache.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_DATABASE,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/infrastructure/migration/{.ts,*.js}`],
      migrationsRun: true,
    }),
    UserModule,
    LanguageModule,
    CacheModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
