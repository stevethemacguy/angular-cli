import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrierConnectionsComponent } from './carrier-connections/carrier-connections.component';
import { CarrierAccountSummaryComponent } from './carrier-account-summary/carrier-account-summary.component';
import { SystemUsersComponent } from './system-users/system-users.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarrierConnectionsComponent, CarrierAccountSummaryComponent, SystemUsersComponent]
})
export class SettingsModule { }
