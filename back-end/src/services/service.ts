import { SimpleModel } from '../model/model'

export default abstract class Service<T> {
    protected model: SimpleModel<T>;

    constructor(model: SimpleModel<T>) {
        this.model = model;
    }

    async list(): Promise<T[]> {
        return await this.model.list() as T[];
    }
}