import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDropDownComponent } from './base-drop-down.component';

describe('BaseDropDownComponent', () => {
  let component: BaseDropDownComponent;
  let fixture: ComponentFixture<BaseDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
