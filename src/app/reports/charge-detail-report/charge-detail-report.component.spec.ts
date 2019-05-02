import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeDetailReportComponent } from './charge-detail-report.component';

describe('ChargeDetailReportComponent', () => {
  let component: ChargeDetailReportComponent;
  let fixture: ComponentFixture<ChargeDetailReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeDetailReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
