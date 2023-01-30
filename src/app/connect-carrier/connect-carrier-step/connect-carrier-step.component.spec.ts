import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConnectCarrierStepComponent } from './connect-carrier-step.component';

describe('ConnectCarrierStepComponent', () => {
  let component: ConnectCarrierStepComponent;
  let fixture: ComponentFixture<ConnectCarrierStepComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectCarrierStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectCarrierStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
