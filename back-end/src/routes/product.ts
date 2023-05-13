import { Router } from 'express';
import { list, validateProduct } from '../controllers/product';

const productRouter = Router();

productRouter.get('/', list)
productRouter.get('/validate', validateProduct)

export default productRouter;
