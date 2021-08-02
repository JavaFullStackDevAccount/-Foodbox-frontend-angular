import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { FoodItem } from '../Models/FoodItem';
import { CredentialsStorageService } from './credentials-storage.service';

@Injectable({
  providedIn: 'root',
})
export class FoodItemService {
  private baseUrl: string = environment.serverUrl + '/food/item';

  private httpHeaders: HttpHeaders = new HttpHeaders();

  constructor(
    private _httpClient: HttpClient,
    private _credentialsStorageService: CredentialsStorageService
  ) {
    this.httpHeaders = this.httpHeaders
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      //.set('Authorization', this._credentialsStorageService.getToken());
  }

  getAllFoodItems() {
    return this._httpClient.get(this.baseUrl + '/');
  }

  getFoodItemWithId(foodItemId: number) {
    return this._httpClient.get(
      this.baseUrl + '/getfooditem?foodItemId=' + foodItemId,
      { headers: this.httpHeaders }
    );
  }

  getFoodItemInCategory(categoryNumber: number) {
    return this._httpClient.get(this.baseUrl + '/category?catnum=' + categoryNumber, );
  }

  deleteFoodItemWithId(foodItemId: number) {
    return this._httpClient.delete(
      this.baseUrl + '/remove?foodItemId=' + foodItemId
    );
  }

  addFoodItem(foodItemToAdd: FoodItem) {
    return this._httpClient.post(this.baseUrl + '/add', foodItemToAdd);
  }

  updateFoodItem(updatedFoodItem: FoodItem) {
    return this._httpClient.put(this.baseUrl + '/update', updatedFoodItem);
  }
}
