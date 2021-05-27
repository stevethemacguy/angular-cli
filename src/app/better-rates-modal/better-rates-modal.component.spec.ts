import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterRatesModalComponent } from './better-rates-modal.component';

describe('BetterRatesModalComponent', () => {
  let component: BetterRatesModalComponent;
  let fixture: ComponentFixture<BetterRatesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetterRatesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetterRatesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
