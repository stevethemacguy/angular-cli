import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateAccountStepComponent } from './create-account-step.component';

describe('CreateAccountStepComponent', () => {
  let component: CreateAccountStepComponent;
  let fixture: ComponentFixture<CreateAccountStepComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
