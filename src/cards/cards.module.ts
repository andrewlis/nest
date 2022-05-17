import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from '../entities/card.entity';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../crud/guards/auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  controllers: [CardsController],
  providers: [
    CardsService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class CardsModule {}
