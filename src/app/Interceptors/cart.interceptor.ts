import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CredentialsStorageService } from '../Services/credentials-storage.service';

@Injectable()
export class CartInterceptor implements HttpInterceptor {
  private interceptUrlEndsWith: string = '/food/item/cart';

  constructor(private _credentialsStorageService: CredentialsStorageService) {}

  private shouldIntercept(url: string) {
    return url.endsWith(this.interceptUrlEndsWith);
  }


  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}
