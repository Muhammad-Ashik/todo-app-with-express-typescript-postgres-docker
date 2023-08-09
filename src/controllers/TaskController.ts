import { Request, Response } from 'express';
import TaskService from '../services/TaskService';

export default class TaskController {
  constructor(public taskService: TaskService) {}
  addTask = async (req: Request, res: Response): Promise<void> => {
    const taskName = req.body.taskName as string;
    console.log(taskName);
    const reponse = await this.taskService.addTask(taskName);
    res.status(200).json(reponse);
  };

  getTasks = async (req: Request, res: Response): Promise<void> => {
    const reponse = await this.taskService.getTasks(req);
    res.status(200).json(reponse);
  };
}