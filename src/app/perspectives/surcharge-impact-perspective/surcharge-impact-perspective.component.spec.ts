import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurchargeImpactPerspectiveComponent } from './surcharge-impact-perspective.component';

describe('SurchargeImpactPerspectiveComponent', () => {
  let component: SurchargeImpactPerspectiveComponent;
  let fixture: ComponentFixture<SurchargeImpactPerspectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurchargeImpactPerspectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurchargeImpactPerspectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
