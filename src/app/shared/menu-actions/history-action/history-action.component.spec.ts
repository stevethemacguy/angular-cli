import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HistoryActionComponent } from './history-action.component';

describe('HistoryActionComponent', () => {
  let component: HistoryActionComponent;
  let fixture: ComponentFixture<HistoryActionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
