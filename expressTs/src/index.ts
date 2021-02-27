import express, { Request, Response } from 'express';
import { router as loginRouter } from './loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: [ 'cookies key' ] }));
app.use(loginRouter);
app.listen(3000, () => console.log('app up and running'));
