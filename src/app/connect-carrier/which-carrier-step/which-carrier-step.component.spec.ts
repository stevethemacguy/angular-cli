import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WhichCarrierStepComponent } from './which-carrier-step.component';

describe('WhichCarrierStepComponent', () => {
  let component: WhichCarrierStepComponent;
  let fixture: ComponentFixture<WhichCarrierStepComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WhichCarrierStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhichCarrierStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
