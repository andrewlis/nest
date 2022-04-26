import { TLifeBase } from '../types/life-base.type';

export interface IWorld {
  id: number,
  name: string;
  population: number;
  lifeBase: TLifeBase;
}