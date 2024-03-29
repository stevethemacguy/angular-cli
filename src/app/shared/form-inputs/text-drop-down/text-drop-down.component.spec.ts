import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TextDropDownComponent } from './text-drop-down.component';

describe('TextDropDownComponent', () => {
  let component: TextDropDownComponent;
  let fixture: ComponentFixture<TextDropDownComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TextDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
