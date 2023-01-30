import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PreviouslyConnectedLaunchComponent } from './previously-connected-launch.component';

describe('PreviouslyConnectedLaunchComponent', () => {
  let component: PreviouslyConnectedLaunchComponent;
  let fixture: ComponentFixture<PreviouslyConnectedLaunchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviouslyConnectedLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviouslyConnectedLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
