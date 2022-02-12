const express = require('express');
const taskRouter = express.Router();
const { getAllTasks } = require('../helpers/getAllTasks');
const { addTaskIntoDatabase } = require('../helpers/addTaskIntoDatabase');
const { v4: uuid } = require('uuid');

taskRouter
  .get('/', async (req, res) => {
    const [tasks] = await getAllTasks();

    res.json(tasks);
  })
  .post('/', async (req, res) => {
    const { title, category } = await req.body;
    const newTask = {
      id: uuid(),
      title,
      createdAt: new Date(),
      category,
    };

    await addTaskIntoDatabase(newTask);
    res.redirect('/');
  })
  .delete('/', async (req, res) => {});

module.exports = {
  taskRouter,
};
