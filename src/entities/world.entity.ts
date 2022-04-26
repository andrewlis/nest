import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TLifeBase } from '../crud/world/types/life-base.type';

@Entity()
export class World {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  population: number;

  @Column()
  lifeBase: TLifeBase;
}
