import { Router } from 'express';
import { getAllTasks } from '../controlers/getAllTasks';
import { getSingleTask } from '../controlers/getSingleTask';
import { addTask } from '../controlers/addTask';
import { deleteTask } from '../controlers/deleteTask';
import { updateTask } from '../controlers/updateTask';

export const taskRouter = Router();

taskRouter // /api/tasks
  .get('/', getAllTasks)
  .get('/:id', getSingleTask)
  .post('/', addTask)
  .delete('/:id', deleteTask)
  .patch('/:id', updateTask);
