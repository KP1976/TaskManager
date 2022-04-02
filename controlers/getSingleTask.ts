import { Request, Response } from 'express';
import { TaskRecord } from '../records/task.record';

export const getSingleTask = async (req: Request, res: Response) => {
  const id = req.params.id;
  const singleTask = await TaskRecord.getOne(id);

  res.json(singleTask);
};