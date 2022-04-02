import * as express from 'express';
import 'express-async-errors';
import * as methodOverride from 'method-override';
import { json, static as eStatic, urlencoded } from 'express';
import { engine } from 'express-handlebars';
import { handleError } from './utilities/errors';
import { taskRouter } from './routes/task';
import { homeRouter } from './routes/home';
import { displayProperDate } from './helpers/displayProperDate';

const PORT = 3000;
const app = express();

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(methodOverride('_method'));
app.use(json());
app.use(eStatic('public'));

app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    helpers: {
      displayProperDate,
    }
  })
);
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/api/tasks', taskRouter);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} on http://localhost:${PORT}`);
});
