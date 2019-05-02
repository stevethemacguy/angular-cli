import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CompletedReportsComponent } from './completed-reports/completed-reports.component';
import { ShipmentDetailReportComponent } from './shipment-detail-report/shipment-detail-report.component';
import { ChargeDetailReportComponent } from './charge-detail-report/charge-detail-report.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [CompletedReportsComponent, ShipmentDetailReportComponent, ChargeDetailReportComponent]
})
export class ReportsModule { }
