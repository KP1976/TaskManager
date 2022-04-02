import { Request, Response } from 'express';
import { TaskRecord } from '../records/task.record';

export const addTask = async (req: Request, res: Response) => {
  const { title, category }: { title: string; category: string } = req.body;
  const task = new TaskRecord({
    ...req.body,
    title,
    category,
  });

  await task.add();

  res.redirect('/');
};
