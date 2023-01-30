import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ValidateAccountStepComponent } from './validate-account-step.component';

describe('ValidateAccountStepComponent', () => {
  let component: ValidateAccountStepComponent;
  let fixture: ComponentFixture<ValidateAccountStepComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateAccountStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateAccountStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
