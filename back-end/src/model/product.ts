import { RowDataPacket } from 'mysql2';
import conn from '../database/connection';
import Product from '../interfaces/product';
import { SimpleModel } from './model';

const DATABASE = 'shopper_db';

export default class ProductModel implements SimpleModel<Product> {
    constructor(private tableName: string = 'products', private connection = conn){}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    async list(): Promise<Partial<Product>[]> {
        const result = await this.connection.execute(
            `SELECT * FROM ${DATABASE}.${this.tableName}`
        )

        const [products] = result as RowDataPacket[];
        return products as Product[];
    }

    async find(code: number): Promise<Partial<Product> | null> {
        const result = await this.connection.execute(`SELECT *
         FROM ${DATABASE}.${this.tableName} AS P WHERE P.code = ?;`, [code]);

        const [products] = result as RowDataPacket[];
        return products[0] as Product;
    }
}
