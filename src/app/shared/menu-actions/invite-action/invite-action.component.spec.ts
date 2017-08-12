import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteActionComponent } from './invite-action.component';

describe('InviteActionComponent', () => {
  let component: InviteActionComponent;
  let fixture: ComponentFixture<InviteActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
