const { pool } = require('../utils/db');

const getAllTasks = async () =>
  await pool.execute('SELECT * FROM `tasks` ORDER BY `createdAt` DESC');

module.exports = {
  getAllTasks,
};
