import { Injectable } from '@nestjs/common';
import { IWorld } from './interfaces/world.interface';
import { CLifeBase } from './constants/life-base.const';
import { InjectRepository } from '@nestjs/typeorm';
import { World } from '../../entities/world.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorldService {
  private readonly worlds: IWorld[] = [
    {
      id: 1,
      name: 'Earth',
      population: 7936256037,
      lifeBase: CLifeBase.CARBON,
    },
  ];

  constructor(
    @InjectRepository(World)
    private worldsRepository: Repository<World>,
  ) {}

  create(world: IWorld) {
    this.worldsRepository.save(world).then((r) => r);
  }

  findAll(): Promise<World[]> {
    return this.worldsRepository.find();
  }

  findOne(id: number): Promise<World> {
    return this.worldsRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.worldsRepository.delete(id);
  }
}
