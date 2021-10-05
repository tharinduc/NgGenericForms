import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormFactory } from './commons/factories/FormFactory';
import { LoginFormFactory } from './commons/factories/LoginFormFactory';
import { LoginService } from './commons/services/login.service';
import { LoginFormComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, FormFactory, LoginFormFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
