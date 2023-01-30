import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResendConfirmationStepComponent } from './resend-confirmation-step.component';

describe('ResendConfirmationStepComponent', () => {
  let component: ResendConfirmationStepComponent;
  let fixture: ComponentFixture<ResendConfirmationStepComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResendConfirmationStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResendConfirmationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
