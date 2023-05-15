import { Request, Response } from 'express';
import { ProductService } from '../services/product';

export async function list(req: Request, res: Response) {
    const productService = new ProductService();
    const productList = await productService.list();
  
    return res.json(productList);
}

export async function validateProduct(req: Request, res: Response) {
    const data = req.body;

    const arrProducts = JSON.parse(data.product);

    const productService = new ProductService();

    const arrCheckedProducts = await productService.validate(arrProducts)

    return res.json(arrCheckedProducts)
}
