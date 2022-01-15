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
    const { 'task-name': title } = await req.body;
    const { minutes, hours, day, month, year } = getCurrentDate();
    const newDate = `${day} ${month}, ${year}`;
    const newTime = `${hours}:${minutes}`;
    const newTask = {
      id: uuid(),
      title,
      createdAt: newDate,
      time: newTime,
      category: 'technologia', // DO POPRAWKI TODO
    };
    await addTaskIntoDatabase(newTask);

    res.redirect('/');
  });

module.exports = {
  addTaskRouter,
};
