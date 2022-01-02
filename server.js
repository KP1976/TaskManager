const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
  })
);
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.render('header');
});

app.listen(PORT, 'localhost', () => {
  console.log(`Server starts listening at http://localhost:${PORT}`);
});
