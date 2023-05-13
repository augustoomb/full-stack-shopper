import express from 'express';
import * as routers from './routes';

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => res.status(200).send('OK'));

app.use('/products', routers.productRouter);


export default app;
