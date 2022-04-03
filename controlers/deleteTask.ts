import { Request, Response } from 'express';
import { TaskRecord } from '../records/task.record';

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedTask = await TaskRecord.getOne(id);

  await deletedTask.delete(id);

  res.end();
};
