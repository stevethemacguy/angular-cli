import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountStepComponent } from './create-account-step.component';

describe('CreateAccountStepComponent', () => {
  let component: CreateAccountStepComponent;
  let fixture: ComponentFixture<CreateAccountStepComponent>;

  beforeEach(async(() => {
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
