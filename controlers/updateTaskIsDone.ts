import { Request, Response } from 'express';
import { TaskRecord } from '../records/task.record';

export const updateTaskIsDone = async (req: Request, res: Response) => {
  console.log(req.params);
  const { id, isDone } = req.params;
  const taskToUpdate = await TaskRecord.getOne(id);

  await taskToUpdate.taskIsDone(id, Number(isDone));
  res.json(taskToUpdate);
};
