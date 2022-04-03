import * as express from 'express';
import 'express-async-errors';
import { json } from 'express';
import { handleError } from './utilities/errors';
import { taskRouter } from './routes/task';
const PORT = 3001;
const app = express();

app.use(json());
app.use('/api/tasks', taskRouter);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} on http://localhost:${PORT}`);
});
