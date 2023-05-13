import { z } from 'zod';

const Product = z.object({
    code: z.number({
        'invalid_type_error': '"code" deve ser um número',
    }),
    name: z.string({
        'invalid_type_error': '"name" deve ser um texto',
    }).optional(),
    costPrice: z.number({
        'invalid_type_error': '"costPrice" deve ser um número',
    }).optional(),
    salesPrice: z.number({
        'invalid_type_error': '"salesPrice" deve ser um número',
    }),
})

type Product = z.infer<typeof Product>

export default Product;
