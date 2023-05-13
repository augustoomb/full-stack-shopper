import { Request, Response } from 'express';
import { ProductService } from '../services/product';

export async function list(req: Request, res: Response) {
    const productService = new ProductService();
    const productList = await productService.list();
  
    return res.json(productList);
  }