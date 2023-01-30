import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmailActionComponent } from './email-action.component';

describe('EmailActionComponent', () => {
  let component: EmailActionComponent;
  let fixture: ComponentFixture<EmailActionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
