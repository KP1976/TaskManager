const express = require('express');
const { getCurrentDate } = require('../helpers/getCurrentDate');
const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
  res.render('index', {
    date: getCurrentDate(),
  });
});

module.exports = {
  homeRouter,
};
