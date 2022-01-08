const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'todo_app',
  namedPlaceholders: true,
  decimalNumbers: true,
});

const getAllTasks = async () => {
  const [tasks] = await pool.execute('SELECT * FROM `tasks`');

  return tasks;
};

module.exports = {
  getAllTasks,
};
