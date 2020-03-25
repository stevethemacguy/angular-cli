import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FedexBillingOverlayComponent } from './fedex-billing-overlay.component';

describe('FedexBillingOverlayComponent', () => {
  let component: FedexBillingOverlayComponent;
  let fixture: ComponentFixture<FedexBillingOverlayComponent>;

  beforeEach(async(() => {
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
