const express = require('express');

const addTaskRouter = express.Router();

addTaskRouter.post('/', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = {
  addTaskRouter,
};
