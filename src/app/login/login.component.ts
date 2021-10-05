import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormComponent } from '../commons/components/BaseFormComponent';
import { FormFactory } from '../commons/factories/FormFactory';
import { LoginModel } from '../commons/models/LoginModel';
import { LoginService } from '../commons/services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['../app.component.scss']
})
export class LoginFormComponent extends BaseFormComponent<LoginModel> {
    loginForm: FormGroup;

    constructor(protected loginService: LoginService, protected formFactory: FormFactory) {
        super(loginService);
        this.loginForm = formFactory.getForm('login');
        this.submit(this.loginForm.value);
    }
}
