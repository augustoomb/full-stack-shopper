import { Router } from 'express';
import { list, validateProduct, update } from '../controllers/product';

const productRouter = Router();

productRouter.get('/', list)
productRouter.post('/validate', validateProduct)
productRouter.post('/update', update)

export default productRouter;
