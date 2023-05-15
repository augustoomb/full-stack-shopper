export interface SimpleModel<T> {
    // create(obj: T): Promise<void>;
    // create(obj: T): Promise<Partial<T>>;
    // list(userId: number): Promise<Partial<T>[]>;
    list(): Promise<Partial<T>[]>;
    find(code: number): Promise<Partial<T> | null>;
    update(code: number, price: number): Promise<void>;
}
