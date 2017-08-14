import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ServiceLevelDashboardComponent } from 'service-level-dashboard/service-level-dashboard.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ServiceLevelDashboardComponent]
})
export class PerspectivesModule { }
