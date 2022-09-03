import express from 'express';
import 'express-async-errors';
import { json } from 'express';
import cors from 'cors';
import { handleError } from './utilities/errors';
import { taskRouter } from './routes/task';
import { config } from './config/config';

const PORT = 3001;
const app = express();

app.use(
  cors({
    origin: config.corsOrigin,
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(json());
// app.use('/tasks', taskRouter);
app.use('/api/tasks', taskRouter);

app.use(handleError);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port ${PORT} on http://localhost:${PORT}`);
});
