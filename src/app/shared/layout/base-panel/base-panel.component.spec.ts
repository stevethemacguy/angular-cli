import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasePanelComponent } from './base-panel.component';

describe('BasePanelComponent', () => {
  let component: BasePanelComponent;
  let fixture: ComponentFixture<BasePanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
