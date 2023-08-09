import { Request } from "express";
import AppDataSource from "../DataSource";
import { Task } from "../entity/Task";

export default class TaskRepository {
  public taskRepo = AppDataSource.getRepository(Task);

  findById = async(id: number) => await this.taskRepo.findOneBy({id});
}