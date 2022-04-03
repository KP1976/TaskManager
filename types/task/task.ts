import { TaskEntity } from './task.entity';

export type CreateTaskReq = Omit<TaskEntity, 'id'>;
