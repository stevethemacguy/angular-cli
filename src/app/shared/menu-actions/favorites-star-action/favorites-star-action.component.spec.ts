import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FavoritesStarActionComponent } from './favorites-star-action.component';

describe('FavoritesStarActionComponent', () => {
  let component: FavoritesStarActionComponent;
  let fixture: ComponentFixture<FavoritesStarActionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesStarActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesStarActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
