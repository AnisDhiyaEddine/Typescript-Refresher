import express, { Request, Response } from 'express';
import { router as loginRouter } from './loginRoutes';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(loginRouter);
app.listen(3000, () => console.log('app up and running'));
