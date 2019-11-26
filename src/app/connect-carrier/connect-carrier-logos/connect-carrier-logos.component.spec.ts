import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectCarrierLogosComponent } from './connect-carrier-logos.component';

describe('ConnectCarrierLogosComponent', () => {
  let component: ConnectCarrierLogosComponent;
  let fixture: ComponentFixture<ConnectCarrierLogosComponent>;

  beforeEach(async(() => {
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
