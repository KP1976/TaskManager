const { pool } = require('../utils/db');

const addTaskIntoDatabase = async ({ id, title, category }) => {
  await pool.execute(
    'INSERT INTO `tasks`(`id`, `title`, `createdAt`, `category`) VALUES(:id, :title, :createdAt, :category)',
    {
      id,
      title,
      createdAt: new Date(),
      category,
    }
  );
};

module.exports = {
  addTaskIntoDatabase,
};
