const express = require('express');
const { engine } = require('express-handlebars');
const { homeRouter } = require('./routers/home');
const { addTaskRouter } = require('./routers/addTask');
const { handlebarsHelpers } = require('./helpers/handlebars-helpers');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    helpers: handlebarsHelpers,
  })
);

app.set('view engine', '.hbs');
app.set('views', './views');

app.use('/', homeRouter);
app.use('/tasks', addTaskRouter);

app.listen(PORT, 'localhost', () => {
  console.log(`Server starts listening at http://localhost:${PORT}`);
});
