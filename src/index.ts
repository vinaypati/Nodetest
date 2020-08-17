import express from 'express';
import bodyParser from 'body-parser';
import { v1Handler, v2Handler } from './handlers';

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || '8000';

app.post('/api/v1/parse', v1Handler);
app.post('/api/v2/parse', v2Handler);

app.listen(port, err => {
  if (err) return console.error(err);
  return console.log(`Server is listening on ${port}`);
});
