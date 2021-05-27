import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditTrialCompletedModalComponent } from './audit-trial-completed-modal.component';

describe('AuditTrialCompletedModalComponent', () => {
  let component: AuditTrialCompletedModalComponent;
  let fixture: ComponentFixture<AuditTrialCompletedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditTrialCompletedModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditTrialCompletedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
