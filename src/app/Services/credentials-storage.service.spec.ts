import { TestBed } from '@angular/core/testing';

import { CredentialsStorageService } from './credentials-storage.service';

describe('CredentialsStorageService', () => {
  let service: CredentialsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CredentialsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
