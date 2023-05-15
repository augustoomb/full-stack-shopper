import { SimpleModel } from '../model/model'

export default abstract class Service<T> {
    protected model: SimpleModel<T>;

    constructor(model: SimpleModel<T>) {
        this.model = model;
    }

    async list(): Promise<T[]> {
        return await this.model.list() as T[];
    }

    async find(code: number): Promise<T | null> {
        const model = this.model as SimpleModel<T>;
        const foundObj = await model.find(code)
        if (!foundObj) {
          return null
        }
        
        return await this.model.find(code) as T;
    }
    
}