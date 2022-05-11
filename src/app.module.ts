import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorldsModule } from './crud/world/worlds.module';
import { LoggerMiddleware } from './crud/middlewares/logger.middleware';
import { EventsModule } from './websockets/events.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { World } from './entities/world.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Users } from './entities/user.entity';

@Module({
  imports: [
    AuthModule,
    WorldsModule,
    EventsModule,
    TypeOrmModule.forRoot({
      // todo вынести в конфигурационный файл
      // mysql.server start в терминале
      type: 'mysql',
      host: 'localhost',
      retryAttempts: 2,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [World, Users],
      synchronize: false,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private connection: Connection) {}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('world');
  }
}
