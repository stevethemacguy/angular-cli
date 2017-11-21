import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './src/app/account/create-account/create-account.component';
import { ForgotPasswordComponent } from './src/app/account/forgot-password/forgot-password.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, CreateAccountComponent, ForgotPasswordComponent]
})
export class AccountModule { }
