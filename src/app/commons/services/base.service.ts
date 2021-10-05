import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IService } from '../interfaces/IService';
import { BaseModel } from '../models/BaseModel';

@Injectable()
export abstract class BaseService<T extends BaseModel> implements IService<T> {
    basePath = environment.BASE_URL;

    constructor(protected httpClient: HttpClient) {}

    post(url: string, data: T) {
        const path = this.basePath + url;
        console.log('Posting ' + data + ' to ' + path);
        // return this.httpClient.post(path, data);
    }

    abstract getPath(): string;

}
