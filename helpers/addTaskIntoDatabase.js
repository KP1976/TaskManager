const { pool } = require('../utils/db');

const addTaskIntoDatabase = async ({ id, title, time, category }) => {
  await pool.execute(
    'INSERT INTO `tasks`(`id`, `title`, `createdAt`, `time`, `category`) VALUES(:id, :title, :createdAt, :time, :category)',
    {
      id,
      title,
      createdAt: Date(),
      time,
      category,
    }
  );
};

module.exports = {
  addTaskIntoDatabase,
};
