import { Router, Request, Response } from 'express';
import { TaskRecord } from '../records/task.record';

export const homeRouter = Router();

homeRouter.get('/', async (req: Request, res: Response) => {
  const tasks = await TaskRecord.listAll();
  const categories = ['rekreacja', 'technologia', 'osobiste', 'jedzenie'];

  res.json({
    tasks,
    categories,
  });
});
