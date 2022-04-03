import { Request, Response } from 'express';
import { TaskRecord } from '../records/task.record';
import { CreateTaskReq } from '../types';

export const addTask = async (req: Request, res: Response) => {
  const task = new TaskRecord(req.body as CreateTaskReq);

  await task.add();

  res.json(task);
};
