import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ServiceLevelDashboardComponent } from 'service-level-dashboard/service-level-dashboard.component';
import { CostReductionDashboardComponent } from 'cost-reduction-dashboard/cost-reduction-dashboard.component';
import { TransportationDashboardComponent } from 'transportation-dashboard/transportation-dashboard.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ServiceLevelDashboardComponent, CostReductionDashboardComponent, TransportationDashboardComponent]
})
export class PerspectivesModule { }
