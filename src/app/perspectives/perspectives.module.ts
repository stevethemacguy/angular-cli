import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PotentialAuditRecoveryComponent } from './potential-audit-recovery/potential-audit-recovery.component';
import { SurchargeImpactPerspectiveComponent } from './surcharge-impact-perspective/surcharge-impact-perspective.component';
import { CostReductionDashboardComponent } from './cost-reduction-dashboard/cost-reduction-dashboard.component';
import { TransportationDashboardComponent } from './transportation-dashboard/transportation-dashboard.component';
import { ServiceLevelDashboardComponent } from './service-level-dashboard/service-level-dashboard.component';
import { ChartHeaderComponent } from './chart-header/chart-header.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ServiceLevelDashboardComponent, CostReductionDashboardComponent, TransportationDashboardComponent, PotentialAuditRecoveryComponent, SurchargeImpactPerspectiveComponent, ChartHeaderComponent]
})
export class PerspectivesModule { }
