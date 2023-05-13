import Product from '../interfaces/product';
import { SimpleModel } from '../model/model';
import ProductModel from '../model/product';
import Service from './service';

export class ProductService extends Service<Product> {
    constructor(model: SimpleModel<Product> = new ProductModel()) {
        super(model);
    }
}