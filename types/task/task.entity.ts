export interface TaskEntity {
  id?: string;
  title: string;
  createdAt?: string | Date;
  category: string;
  isDone: number;
}
