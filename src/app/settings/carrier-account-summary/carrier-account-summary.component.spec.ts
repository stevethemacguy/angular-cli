import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarrierAccountSummaryComponent } from './carrier-account-summary.component';

describe('CarrierAccountSummaryComponent', () => {
  let component: CarrierAccountSummaryComponent;
  let fixture: ComponentFixture<CarrierAccountSummaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierAccountSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierAccountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
