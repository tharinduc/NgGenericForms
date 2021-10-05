import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginFormFactory } from './LoginFormFactory';

@Injectable()
export class FormFactory {
    constructor(private loginFormFactory: LoginFormFactory) {

    }

    getForm(type: string): FormGroup {
        if (type === 'login') {
            return this.loginFormFactory.getLoginForm();
        }
    }
}
