import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShipmentDetailReportComponent } from './shipment-detail-report.component';

describe('ShipmentDetailReportComponent', () => {
  let component: ShipmentDetailReportComponent;
  let fixture: ComponentFixture<ShipmentDetailReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentDetailReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
