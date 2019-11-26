import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrumbStepsComponent } from './bread-crumb-steps.component';

describe('BreadCrumbStepsComponent', () => {
  let component: BreadCrumbStepsComponent;
  let fixture: ComponentFixture<BreadCrumbStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadCrumbStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCrumbStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
