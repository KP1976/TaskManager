const express = require('express');
const { getCurrentDate } = require('../helpers/getCurrentDate');
const homeRouter = express.Router();
const { getAllTasks } = require('../helpers/getAllTasks');
const { getLengthOfCategories } = require('../helpers/getLengthOfCategories');

homeRouter.get('/', async (req, res) => {
  const [tasks] = await getAllTasks();
  const categories = await getLengthOfCategories();

  res.render('index', {
    date: getCurrentDate(),
    tasks,
    categories,
  });
});

module.exports = {
  homeRouter,
};
