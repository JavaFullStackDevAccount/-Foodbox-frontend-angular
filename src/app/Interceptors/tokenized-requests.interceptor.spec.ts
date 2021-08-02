import { TestBed } from '@angular/core/testing';

import { TokenizedRequestsInterceptor } from './tokenized-requests.interceptor';

describe('TokenizedRequestsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenizedRequestsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenizedRequestsInterceptor = TestBed.inject(TokenizedRequestsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
