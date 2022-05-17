import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Card {
  @Column({ nullable: true })
  image: string;

  @PrimaryGeneratedColumn()
  title: string;

  @Column()
  subtitle: string;

  @Column()
  description: string;
}
