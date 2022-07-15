import express from 'express';
import 'express-async-errors';
import { json } from 'express';
import cors from 'cors';
import { handleError } from './utilities/errors';
import { taskRouter } from './routes/task';
const PORT = 3001;
const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(json());
app.use('/api/tasks', taskRouter);

app.use(handleError);

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Listening on port ${PORT} on http://localhost:${PORT}`);
});
