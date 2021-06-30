import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { FoodItem } from '../Models/FoodItem';
import { CredentialsStorageService } from './credentials-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseUrl = environment.serverUrl + '/food/item/cart';

  constructor(
    private _httpClient: HttpClient,
    private _credentialsStorageService: CredentialsStorageService
  ) {}

  getUsersCart() {
    return this._httpClient.get(this.baseUrl, {
      params: new HttpParams().append(
        'id',
        this._credentialsStorageService.getUserId().toString()
      ),
    });
  }

  removeItemFromCart(foodItemId: number) {
    const data = new HttpParams()
      .append('id', this._credentialsStorageService.getUserId().toString())
      .append('fiid', foodItemId.toString());
    return this._httpClient.delete(this.baseUrl , { params: data });
  }

  addItemToCart(foodItemId: number) {
    const data = new HttpParams()
      .append('id', this._credentialsStorageService.getUserId().toString())
      .append('fiid', foodItemId.toString());
    return this._httpClient.put(this.baseUrl, {}, { params: data });
  }
}
