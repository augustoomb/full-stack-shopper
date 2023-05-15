import { Router } from 'express';
import { list, validateProduct } from '../controllers/product';

const productRouter = Router();

productRouter.get('/', list)
productRouter.post('/validate', validateProduct)

export default productRouter;
