import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './infrastructure/modules/user.module';
import { UserController } from './application/controllers/user.controller';
import { UserService } from './domain/services/user.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageModule } from './infrastructure/modules/language.module';
import { LanguageController } from './application/controllers/language.controller';
import { LanguageService } from './domain/services/language.service';
import { CacheModule } from './cache/cache.module';
import { LoggerModule } from 'nestjs-pino';
import { CORRELATION_ID_HEADER, CorrelationIdMiddleware } from './application/middlewares/correlation-id.middleware';
import { Request } from 'express';
import { AuthModule } from './application/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: process.env.NODE_ENV === 'development' ? {
          target: "pino-pretty",
          options: {
            messageKey: 'message'
          },
        } : undefined,
        messageKey: 'message',
        customProps: (req: Request) => {
          return {
            correlationId: req[CORRELATION_ID_HEADER],
          };
        },
        autoLogging: false,
        serializers: {
          req: () => {
            return undefined;
          },
          res: () => {
            return undefined;
          }
        }
      }
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
    CacheModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationIdMiddleware).forRoutes("*");
  }
}
