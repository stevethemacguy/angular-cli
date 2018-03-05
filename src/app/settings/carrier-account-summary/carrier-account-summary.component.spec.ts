import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierAccountSummaryComponent } from './carrier-account-summary.component';

describe('CarrierAccountSummaryComponent', () => {
  let component: CarrierAccountSummaryComponent;
  let fixture: ComponentFixture<CarrierAccountSummaryComponent>;

  beforeEach(async(() => {
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
