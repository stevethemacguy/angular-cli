import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDataModalComponent } from './no-data-modal.component';

describe('NoDataModalComponent', () => {
  let component: NoDataModalComponent;
  let fixture: ComponentFixture<NoDataModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoDataModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
