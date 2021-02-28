import express from 'express';
import './controllers/LoginController';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: [ 'cookies key' ] }));
app.use(AppRouter.getInstance());
app.listen(3000, () => console.log('app up and running'));
