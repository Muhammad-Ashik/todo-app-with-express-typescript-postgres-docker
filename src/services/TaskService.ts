import { Request } from "express"
import TaskRepository from "../repositories/TaskRepository"
import { TaskOutputDto } from "../dto/task";
import { Task } from "../entity/Task";

export default class TaskService {
  constructor(public taskRepository: TaskRepository) {}

  getTasks = async (req: Request): Promise<{tasks: TaskOutputDto[], count: number}> => {
    const [tasks, count] = await this.taskRepository.taskRepo.findAndCount({
      order: {
        id: 'DESC'
      }
    });
    // const tasks = [{id: 1, taskName: 'task1', taskDescription: 'task1 description'}];
    // const count = 1;
    return {tasks, count};
  }

  addTask = async (taskName: string) => {
    try {
      const newTaskName = new Task();
      newTaskName.taskName = taskName;
      console.log(newTaskName);
      const task = await this.taskRepository.taskRepo.save(newTaskName);
      console.log('your task name is saved successfully')
      return task;
    } catch (error) {
      throw new Error("Error while adding task");
    }
  }
}