import { TestBed } from '@angular/core/testing';

import { FoodboxUserService } from './foodbox-user.service';

describe('FoodboxUserService', () => {
  let service: FoodboxUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodboxUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
