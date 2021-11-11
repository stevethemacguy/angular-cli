import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierLogoComponent } from './carrier-logo.component';

describe('CarrierLogoComponent', () => {
  let component: CarrierLogoComponent;
  let fixture: ComponentFixture<CarrierLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrierLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
