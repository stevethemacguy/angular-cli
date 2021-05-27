import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditTrialSuccessModalComponent } from './audit-trial-success-modal.component';

describe('AuditTrialSuccessModalComponent', () => {
  let component: AuditTrialSuccessModalComponent;
  let fixture: ComponentFixture<AuditTrialSuccessModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditTrialSuccessModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditTrialSuccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
