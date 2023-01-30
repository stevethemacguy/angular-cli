import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FedexBillingOverlayComponent } from './fedex-billing-overlay.component';

describe('FedexBillingOverlayComponent', () => {
  let component: FedexBillingOverlayComponent;
  let fixture: ComponentFixture<FedexBillingOverlayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FedexBillingOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FedexBillingOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
