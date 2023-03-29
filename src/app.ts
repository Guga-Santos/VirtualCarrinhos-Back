import express from 'express';
import errorHandler from './middlewares/error';

const app = express();
app.use(errorHandler);

export default app;