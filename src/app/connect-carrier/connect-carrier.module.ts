import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { DemoStepTwoComponent } from './demo-step-two/demo-step-two.component';
import { DemoStepThreeComponent } from './demo-step-three/demo-step-three.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { CompletedComponent } from './completed/completed.component';
import { ConnectCarrierHeaderComponent } from './connect-carrier-header/connect-carrier-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StepOneComponent, StepTwoComponent, DemoStepTwoComponent, DemoStepThreeComponent, StepThreeComponent, CompletedComponent, ConnectCarrierHeaderComponent]
})
export class ConnectCarrierModule { }
