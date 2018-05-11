import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectCarrierHeaderComponent } from './connect-carrier-header.component';

describe('ConnectCarrierHeaderComponent', () => {
  let component: ConnectCarrierHeaderComponent;
  let fixture: ComponentFixture<ConnectCarrierHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectCarrierHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectCarrierHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
