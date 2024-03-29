import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompletedReportsComponent } from './completed-reports.component';

describe('CompletedReportsComponent', () => {
  let component: CompletedReportsComponent;
  let fixture: ComponentFixture<CompletedReportsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
