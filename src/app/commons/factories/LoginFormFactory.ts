import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class LoginFormFactory {
    form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            username: new FormControl(''),
            password: new FormControl(''),
        });
    }

    getLoginForm(): FormGroup {
        return this.form;
    }
}
