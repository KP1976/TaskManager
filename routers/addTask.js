const express = require('express');
const addTaskRouter = express.Router();
const { getAllTasks } = require('../helpers/getAllTasks');
const { addTaskIntoDatabase } = require('../helpers/addTaskIntoDatabase');
const { v4: uuid } = require('uuid');
const { getCurrentDate } = require('../helpers/getCurrentDate');

addTaskRouter
  .get('/', async (req, res) => {
    const [tasks] = await getAllTasks();

    res.json(tasks);
  })
  .post('/', async (req, res) => {
    const { title, category } = await req.body;
    // const { 'task-name': title, 'task-category': category } = await req.body;
    const newTask = {
      id: uuid(),
      title,
      createdAt: new Date(),
      category,
    };

    console.log(req.body);

    await addTaskIntoDatabase(newTask);
    res.redirect('/');
  });

module.exports = {
  addTaskRouter,
};
