import Product from '../interfaces/product';
import { SimpleModel } from '../model/model';
import ProductModel from '../model/product';
import Service from './service';

export class ProductService extends Service<Product> {
    requiredProductKeys = ['product_code','new_price'];

    constructor(model: SimpleModel<Product> = new ProductModel()) {
        super(model);
    }
    

    checkKeysInArrProduct(product: Product) {
        const keys = Object.keys(product);

        return JSON.stringify(this.requiredProductKeys) !== JSON.stringify(keys) ? false : true;
    }

    checkIsNumeric(item: string) {
        return typeof +item === 'number'
    }

    checkTypeErrors(product: any) {
        const errors = [];

        if(!this.checkKeysInArrProduct(product)) {
            errors.push({'errorKeys': 'Os campos "product_code,new_price" devem ser fornecidos'});
        }

        if(!this.checkIsNumeric(product['product_code'])) {
            errors.push({'typeError': 'O código deve ser um valor numérico'});
        }
        
        if(!this.checkIsNumeric(product['new_price']) ) {
            errors.push({'typeError': 'O preço deve ser um valor numérico'});
        }

        return errors;
    }



    async productExists(product: any) {
        return await this.find(+product['product_code'])        
    }

    async checkContentErrors(product: any) {
        const errors = [];

        const completeProduct = await this.productExists(product);

        if(completeProduct === null) {
            errors.push({'notFoundProduct': 'Produto não encontrado'})
        }

        return errors;

    }

    async checkRulesErrors(product: any, completeProduct: any) {
        const errors = [];

        if(product['new_price'] < completeProduct['cost_price']) {
            errors.push({'financialError': 'Novo preço deve ser maior que o custo do produto'})
        }

        const teenPercentPrice = ((completeProduct['sales_price']/100) * 10).toFixed(2);
        const minPrice = (+completeProduct['sales_price'] - +teenPercentPrice).toFixed(2);
        const maxPrice = (+completeProduct['sales_price'] + +teenPercentPrice).toFixed(2);


        if(product['new_price'] < minPrice || product['new_price'] > maxPrice) {
            errors.push({'marketingError': 'Variação de preço não pode ser superior a 10%'})
        }

        return errors;
        
    }



    async validate(products: Product[]): Promise<Product[] | any[]> {
        const arrValidateProducts = Promise.all(products.map(async (product) => {
            const completeProduct = await this.productExists(product)
            return {
                data: completeProduct ? {completeProduct, product} : product,
                typeErrors: this.checkTypeErrors(product),
                contentErrors: await this.checkContentErrors(product),
                rulesErrors: completeProduct ? 
                await this.checkRulesErrors(product, completeProduct) : []
            } 
        }))

        return arrValidateProducts;
    }
   
}