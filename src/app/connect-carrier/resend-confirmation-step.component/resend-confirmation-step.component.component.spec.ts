import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendConfirmationStep.ComponentComponent } from './resend-confirmation-step.component.component';

describe('ResendConfirmationStep.ComponentComponent', () => {
  let component: ResendConfirmationStep.ComponentComponent;
  let fixture: ComponentFixture<ResendConfirmationStep.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResendConfirmationStep.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResendConfirmationStep.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
