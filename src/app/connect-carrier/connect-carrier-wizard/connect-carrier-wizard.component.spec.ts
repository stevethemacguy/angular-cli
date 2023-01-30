import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConnectCarrierWizardComponent } from './connect-carrier-wizard.component';

describe('ConnectCarrierWizardComponent', () => {
  let component: ConnectCarrierWizardComponent;
  let fixture: ComponentFixture<ConnectCarrierWizardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectCarrierWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectCarrierWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
