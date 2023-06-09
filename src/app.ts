import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import acessoriesRouter from './routes/Acessory';
import carRouter from './routes/Car';
import LoginRouter from './routes/Login';
import userRouter from './routes/User';

const app = express();
app.use(express.json());
app.use(carRouter);
app.use(acessoriesRouter);
app.use(userRouter);
app.use(LoginRouter);
app.use(errorHandler);

export default app;