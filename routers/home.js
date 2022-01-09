const express = require('express');
const { getCurrentDate } = require('../helpers/getCurrentDate');
const homeRouter = express.Router();
const { getAllTasks } = require('../utils/db');

homeRouter.get('/', async (req, res) => {
  const tasks = await getAllTasks();
  // console.log(tasks);

  res.render('index', {
    date: getCurrentDate(),
    tasks,
  });
});

module.exports = {
  homeRouter,
};
