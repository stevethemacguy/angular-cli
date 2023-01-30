import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PotentialAuditRecoveryComponent } from './potential-audit-recovery.component';

describe('PotentialAuditRecoveryComponent', () => {
  let component: PotentialAuditRecoveryComponent;
  let fixture: ComponentFixture<PotentialAuditRecoveryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialAuditRecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialAuditRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
