import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/LoginModel';
import { BaseService } from './base.service';

@Injectable()
export class LoginService extends BaseService<LoginModel> {
    path = '/login';

    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }

    login(data: LoginModel) {
        this.post(this.path, data);
    }

    getPath(): string {
        return this.path;
    }
}
