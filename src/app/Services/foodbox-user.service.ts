import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { FoodBoxUser } from '../Models/FoodBoxUser';

@Injectable({
  providedIn: 'root',
})
export class FoodboxUserService {
  private baseUrl: string = environment.serverUrl + '/foodbox/user';

  constructor(private _httpClient: HttpClient) {}

  attemptToRegister(userToRegister: FoodBoxUser) {
    return this._httpClient.post(environment.serverUrl + '/auth/register', userToRegister);
  }

  attemptLogin(userToLogin: any) {
    return this._httpClient.post(environment.serverUrl + '/auth', userToLogin);
  }

  getUserWithId(idOfTheUserToGet: number) {
    const httpParams: HttpParams = new HttpParams().append(
      'id',
      idOfTheUserToGet.toString()
    );

    return this._httpClient.get(this.baseUrl, { params: httpParams });
  }
}
