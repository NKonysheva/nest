import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('news')
export class News {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @Column({ name: 'name', type: 'text' })
  name!: string;

  @CreateDateColumn()
  createdat!: Date;

  @UpdateDateColumn()
  updatedat!: Date;

  @Column({ name: 'description', type: 'text' })
  description!: string;

  @Column({ name: 'text', type: 'text' })
  text!: string;
}
