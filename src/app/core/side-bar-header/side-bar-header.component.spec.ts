import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SideBarHeaderComponent } from './side-bar-header.component';

describe('SideBarHeaderComponent', () => {
  let component: SideBarHeaderComponent;
  let fixture: ComponentFixture<SideBarHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
