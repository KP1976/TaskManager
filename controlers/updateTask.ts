import { Request, Response } from 'express';
import { TaskRecord } from '../records/task.record';
import { TaskEntity } from '../types';

export const updateTask = async (req: Request, res: Response) => {
  const { title, category }: TaskEntity = req.body;
  const { id } = req.params;
  const taskToUpdate = await TaskRecord.getOne(id);

  await taskToUpdate.update(id, title, category);

  res.json(taskToUpdate);
};
