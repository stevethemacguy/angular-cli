import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStepThreeComponent } from './demo-step-three.component';

describe('DemoStepThreeComponent', () => {
  let component: DemoStepThreeComponent;
  let fixture: ComponentFixture<DemoStepThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoStepThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
