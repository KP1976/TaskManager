const express = require('express');
const addTaskRouter = express.Router();
const { getAllTasks } = require('../helpers/getAllTasks');
const { addTaskIntoDatabase } = require('../helpers/addTaskIntoDatabase');
const { v4: uuid } = require('uuid');

addTaskRouter
  .get('/', async (req, res) => {
    const [tasks] = await getAllTasks();
    res.json(tasks);
  })
  .post('/', async (req, res) => {
    const { 'task-name': title, 'task-category': category } = await req.body;
    const newTask = {
      id: uuid(),
      title,
      createdAt: new Date(),
      category,
    };

    await addTaskIntoDatabase(newTask);

    res.redirect('/');
  });

module.exports = {
  addTaskRouter,
};
