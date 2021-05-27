import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditTrialActiveModalComponent } from './audit-trial-active-modal.component';

describe('AuditTrialActiveModalComponent', () => {
  let component: AuditTrialActiveModalComponent;
  let fixture: ComponentFixture<AuditTrialActiveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditTrialActiveModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditTrialActiveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
