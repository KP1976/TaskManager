import { pool } from '../utilities/database';
import { ValidationError } from '../utilities/errors';
import { v4 as uuid } from 'uuid';
import { FieldPacket } from 'mysql2';
import { TaskEntity } from '../types';

type TaskRecordResults = [TaskEntity[], FieldPacket[]];

export class TaskRecord implements TaskEntity {
  public id?: string;
  public title: string;
  public createdAt?: string | Date;
  public category: string;
  public isDone: boolean;

  constructor(obj: TaskEntity) {
    const { id, title, createdAt, category, isDone } = obj;

    this.id = id ?? uuid();
    this.title = title;
    this.createdAt = createdAt ?? new Date().toLocaleDateString();
    this.category = category;
    this.isDone = isDone;

    this.validate();
  }

  private validate(): void {
    if (this.title.length < 3 || this.title.length > 30) {
      throw new ValidationError('Tytuł musi posiadać od 3 do 30 znaków.');
    }
  }

  static async listAll(): Promise<TaskRecord[]> {
    const [results] = (await pool.execute(
      'SELECT * FROM `tasks` ORDER BY `createdAt` DESC'
    )) as TaskRecordResults;

    return results.map((obj) => new TaskRecord(obj));
  }

  static async getOne(id: string): Promise<TaskRecord | null> {
    const [results] = (await pool.execute(
      'SELECT * FROM `tasks` WHERE `id` = :id',
      {
        id,
      }
    )) as TaskRecordResults;

    return results.length === 0 ? null : new TaskRecord(results[0]);
  }

  async add(): Promise<string> {
    await pool.execute(
      'INSERT INTO `tasks`(`id`, `title`, `createdAt`, `category`) VALUES(:id, :title, :createdAt, :category)',
      {
        id: this.id,
        title: this.title,
        createdAt: new Date(),
        category: this.category,
      }
    );

    return this.id;
  }

  async delete(id: string): Promise<string> {
    await pool.execute('DELETE FROM `tasks` WHERE `id` = :id', { id });
    return id;
  }

  async update(
    id: string,
    title: string,
    category: string,
    isDone: number
  ): Promise<void> {
    await pool.execute(
      'UPDATE `tasks` SET `title` = :title, `category` = :category, `createdAt` = :createdAt, `isDone` = :isDone WHERE `id` = :id',
      {
        id,
        title,
        createdAt: new Date(),
        category,
        isDone,
      }
    );
  }
}
