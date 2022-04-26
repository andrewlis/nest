import { Module } from '@nestjs/common';
import { WorldController } from './world.controller';
import { WorldService } from './world.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../guards/auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { World } from '../../entities/world.entity';

@Module({
  imports: [TypeOrmModule.forFeature([World])],
  controllers: [WorldController],
  providers: [
    WorldService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  exports: [WorldService],
})
export class WorldsModule {}
