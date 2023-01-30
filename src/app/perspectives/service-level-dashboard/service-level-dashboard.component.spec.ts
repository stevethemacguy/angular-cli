import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServiceLevelDashboardComponent } from './service-level-dashboard.component';

describe('ServiceLevelDashboardComponent', () => {
  let component: ServiceLevelDashboardComponent;
  let fixture: ComponentFixture<ServiceLevelDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLevelDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLevelDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
