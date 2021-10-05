import { BaseModel } from './BaseModel';

export class LoginModel extends BaseModel {
    username: string;
    password: string;

    constructor(loginObj: object) {
        super(loginObj);
    }
}
