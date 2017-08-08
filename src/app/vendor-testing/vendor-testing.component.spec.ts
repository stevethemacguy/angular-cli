import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorTestingComponent } from './vendor-testing.component';

describe('VendorTestingComponent', () => {
  let component: VendorTestingComponent;
  let fixture: ComponentFixture<VendorTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
