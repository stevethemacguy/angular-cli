import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ResendConfirmationComponent } from './resend-confirmation/resend-confirmation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountRoutingModule } from './account-routing.module';
import { AccountRoutingComponent } from './account-routing.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    NgbModalModule
  ],
  declarations: [AccountRoutingComponent, LoginComponent, CreateAccountComponent, ForgotPasswordComponent, ResendConfirmationComponent]
})
export class AccountModule { }
