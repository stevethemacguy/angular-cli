import { TestBed, inject } from '@angular/core/testing';

import { CurrentUserService } from './current-user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CurrentUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentUserService],
      imports: [
        HttpClientTestingModule
      ],
    });
  });

  it('should be created', inject([CurrentUserService], (service: CurrentUserService) => {
    expect(service).toBeTruthy();
  }));
});
