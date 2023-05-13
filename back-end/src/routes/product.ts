import { Router } from 'express';
import { list } from '../controllers/product';

const productRouter = Router();

productRouter.get('/', list)

export default productRouter;
