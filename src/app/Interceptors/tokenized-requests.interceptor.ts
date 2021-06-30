import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CredentialsStorageService } from '../Services/credentials-storage.service';

@Injectable()
export class TokenizedRequestsInterceptor implements HttpInterceptor {
  private endPointsNotToIntercept: string[] = [
    '/auth',
    '/auth/register',
    '/foodbox/user/',
    '/food/item/',
    '/food/item/category',
  ];
  constructor(private _credentialsStorageService: CredentialsStorageService) {}

  shouldIntercept(requestUrl: string) {
    if (requestUrl.includes('/food/item/category')) {
      return false;
    }
    for (let endpoint of this.endPointsNotToIntercept) {
      if (requestUrl.endsWith(endpoint)) return false;
    }

    return true;
  }
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.shouldIntercept(request.url)) {
      const authReq = request.clone({
        headers: request.headers.set(
          'Authorization',
          this._credentialsStorageService.getToken()
        ),
      });

      console.log("INterceptor result -> ");
      console.log(authReq)
      return next.handle(authReq);
    }

    return next.handle(request);
  }
}
