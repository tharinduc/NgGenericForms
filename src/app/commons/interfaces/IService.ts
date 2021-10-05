export interface IService<T> {
    post(url: string, data: T);
}
