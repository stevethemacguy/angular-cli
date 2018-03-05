import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationDashboardComponent } from './transportation-dashboard.component';

describe('TransportationDashboardComponent', () => {
  let component: TransportationDashboardComponent;
  let fixture: ComponentFixture<TransportationDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportationDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
