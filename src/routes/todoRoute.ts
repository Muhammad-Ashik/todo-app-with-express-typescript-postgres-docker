import express from "express";
import TaskController from "../controllers/TaskController";
import TaskService from '../services/TaskService';
import TaskRepository from "../repositories/TaskRepository";

const router = express.Router();

const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

router.post('/add', taskController.addTask)
router.get('/get', taskController.getTasks)

export default router