import { Controller, Get, UseGuards } from '@nestjs/common';
import { ICard } from './interfaces/card.interface';
import { CardsService } from './cards.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('cards')
@UseGuards(JwtAuthGuard)
export class CardsController {
  constructor(private service: CardsService) {}

  @Get()
  async getAll(): Promise<ICard[]> {
    return this.service.findAll();
  }
}
