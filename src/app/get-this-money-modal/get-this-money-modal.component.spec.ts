import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetThisMoneyModalComponent } from './get-this-money-modal.component';

describe('GetThisMoneyModalComponent', () => {
  let component: GetThisMoneyModalComponent;
  let fixture: ComponentFixture<GetThisMoneyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetThisMoneyModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetThisMoneyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
