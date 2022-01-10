const { pool } = require('../utils/db');

const getAllTasks = async () => await pool.execute('SELECT * FROM `tasks`');

module.exports = {
  getAllTasks,
};
