import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export class AddTaskDto {
  taskName: string;
}

@Entity('task')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 100, nullable: true })
  taskName: string;
}