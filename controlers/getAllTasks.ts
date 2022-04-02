import { Request, Response } from 'express';
import { TaskRecord } from '../records/task.record';

export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await TaskRecord.listAll();

  res.json(tasks);
};