import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ZingchartComponent } from './src/app/vendor-testing/zingchart/zingchart.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ZingchartComponent]
})
export class VendorTestingModule { }
