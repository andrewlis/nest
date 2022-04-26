import { TLifeBase } from '../types/life-base.type';
import { IsNumber, IsString } from 'class-validator';

export class CreateWorldDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsNumber()
  population: number;

  lifeBase: TLifeBase;
}
