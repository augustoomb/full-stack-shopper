import express, { NextFunction, Request, Response  } from 'express';
import * as routers from './routes';
import 'express-async-errors';
// import { ZodError } from 'zod';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors())

app.get('/health', (_req, res) => res.status(200).send('OK'));

app.use('/products', routers.productRouter);

// middleware de erros
app.use((err: unknown, _: Request, res: Response, __: NextFunction) => {    
    return res.status(500).json({ message: 'Erro interno' });
});

export default app;
