import { Request, Response } from 'express';
import { ProductService } from '../services/product';
import { StatusCodes } from 'http-status-codes';

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

export async function update(req: Request, res: Response) {
    const data = req.body;

    const arrProducts = JSON.parse(data.product);

    const productService = new ProductService();

    // await productService.update(arrProducts[0].code, arrProducts[0].price)

    Promise.all(arrProducts.map(async (product: any) => {
        // const completeProduct = await this.productExists(product)
        await productService.update(product.code, product.price)
    }))

    res.status(StatusCodes.OK).send(true);
}
