import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConnectCarrierLogosComponent } from './connect-carrier-logos.component';

describe('ConnectCarrierLogosComponent', () => {
  let component: ConnectCarrierLogosComponent;
  let fixture: ComponentFixture<ConnectCarrierLogosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectCarrierLogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectCarrierLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
