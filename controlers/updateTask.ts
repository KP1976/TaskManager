import { Request, Response } from 'express';
import { TaskRecord } from '../records/task.record';
import { TaskEntity } from '../types';

// interface TaskTypes {
//   title: string;
//   category: string;
//   isDone: number;
// }

export const updateTask = async (req: Request, res: Response) => {
  const { title, category }: TaskEntity = req.body;
  const { isDone } = req.query;
  const { id } = req.params;
  const taskToUpdate = await TaskRecord.getOne(id);

  await taskToUpdate.update(id, title, category, Number(isDone));

  res.json(taskToUpdate);
};
