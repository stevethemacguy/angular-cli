import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResendConfirmationComponent } from './resend-confirmation.component';

describe('ResendConfirmationComponent', () => {
  let component: ResendConfirmationComponent;
  let fixture: ComponentFixture<ResendConfirmationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResendConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResendConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
