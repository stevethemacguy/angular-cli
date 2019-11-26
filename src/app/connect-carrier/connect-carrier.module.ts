import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { DemoStepTwoComponent } from './demo-step-two/demo-step-two.component';
import { DemoStepThreeComponent } from './demo-step-three/demo-step-three.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { CompletedComponent } from './completed/completed.component';
import { ConnectCarrierHeaderComponent } from './connect-carrier-header/connect-carrier-header.component';
import { BreadCrumbStepsComponent } from './bread-crumb-steps/bread-crumb-steps.component';
import { ConnectCarrierLogosComponent } from './connect-carrier-logos/connect-carrier-logos.component';
import { ConnectCarrierStepComponent } from './connect-carrier-step/connect-carrier-step.component';
import { WhichCarrierStepComponent } from './which-carrier-step/which-carrier-step.component';
import { PreviouslyConnectedLaunchComponent } from './previously-connected-launch/previously-connected-launch.component';
import { ResendConfirmationStep } from './resend-confirmation-step.component/resend-confirmation-step.component.component';
import { CreateAccountStepComponent } from './create-account-step/create-account-step.component';
import { ConnectSuccessComponent } from './connect-success/connect-success.component';
import { ConnectCarrierWizardComponent } from './connect-carrier-wizard/connect-carrier-wizard.component';
import { ValidateAccountStepComponent } from './validate-account-step/validate-account-step.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StepOneComponent, StepTwoComponent, DemoStepTwoComponent, DemoStepThreeComponent, StepThreeComponent, CompletedComponent, ConnectCarrierHeaderComponent, BreadCrumbStepsComponent, ConnectCarrierLogosComponent, ConnectCarrierStepComponent, WhichCarrierStepComponent, PreviouslyConnectedLaunchComponent, ResendConfirmationStep.ComponentComponent, CreateAccountStepComponent, ConnectSuccessComponent, ConnectCarrierWizardComponent, ValidateAccountStepComponent]
})
export class ConnectCarrierModule { }
