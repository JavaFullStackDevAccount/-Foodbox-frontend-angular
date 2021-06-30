import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CredentialsStorageService } from '../Services/credentials-storage.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuard implements CanActivate {
  constructor(
    private _credentialsStorageService: CredentialsStorageService,
    private _router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this._credentialsStorageService.getCredentials()) return true;
    else {
      this._router.navigateByUrl('/login');
      return false;
    }
  }
}
