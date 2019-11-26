import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectSuccessComponent } from './connect-success.component';

describe('ConnectSuccessComponent', () => {
  let component: ConnectSuccessComponent;
  let fixture: ComponentFixture<ConnectSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
