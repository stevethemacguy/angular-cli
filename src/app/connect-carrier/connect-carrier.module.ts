import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbStepsComponent } from './bread-crumb-steps/bread-crumb-steps.component';
import { ConnectCarrierLogosComponent } from './connect-carrier-logos/connect-carrier-logos.component';
import { ConnectCarrierStepComponent } from './connect-carrier-step/connect-carrier-step.component';
import { WhichCarrierStepComponent } from './which-carrier-step/which-carrier-step.component';
import { PreviouslyConnectedLaunchComponent } from './previously-connected-launch/previously-connected-launch.component';
import { CreateAccountStepComponent } from './create-account-step/create-account-step.component';
import { ConnectSuccessComponent } from './connect-success/connect-success.component';
import { ConnectCarrierWizardComponent } from './connect-carrier-wizard/connect-carrier-wizard.component';
import { ValidateAccountStepComponent } from './validate-account-step/validate-account-step.component';
import { ResendConfirmationStepComponent } from './resend-confirmation-step/resend-confirmation-step.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BreadCrumbStepsComponent,
    ConnectCarrierLogosComponent,
    ConnectCarrierStepComponent,
    WhichCarrierStepComponent,
    PreviouslyConnectedLaunchComponent,
    CreateAccountStepComponent,
    ConnectSuccessComponent,
    ConnectCarrierWizardComponent,
    ValidateAccountStepComponent,
    ResendConfirmationStepComponent
  ]
})
export class ConnectCarrierModule { }
