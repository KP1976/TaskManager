import { Request, Response } from 'express';
import { TaskRecord } from '../records/task.record';

export const addTask = async (req: Request, res: Response) => {
  const task = new TaskRecord(req.body);

  await task.add();
  res.json(task);
};
