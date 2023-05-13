import { z } from 'zod';

const Pack = z.object({
    id: z.number({
        'invalid_type_error': '"id" deve ser um número',
    }),
    packId: z.number({
        'invalid_type_error': '"packId" deve ser um número',
    }),
    productId: z.number({
        'invalid_type_error': '"productId" deve ser um número',
    }),
    qty: z.number({
        'invalid_type_error': '"qty" deve ser um número',
    }),
})

type Pack = z.infer<typeof Pack>

export default Pack;
