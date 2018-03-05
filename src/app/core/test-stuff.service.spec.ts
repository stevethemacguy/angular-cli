import { TestBed, inject } from '@angular/core/testing';

import { TestStuffService } from './test-stuff.service';

describe('TestStuffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestStuffService]
    });
  });

  it('should be created', inject([TestStuffService], (service: TestStuffService) => {
    expect(service).toBeTruthy();
  }));
});
