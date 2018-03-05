import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostReductionDashboardComponent } from './cost-reduction-dashboard.component';

describe('CostReductionDashboardComponent', () => {
  let component: CostReductionDashboardComponent;
  let fixture: ComponentFixture<CostReductionDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostReductionDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostReductionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
