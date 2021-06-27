import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { FoodItem } from '../Models/FoodItem';
import { OrdersRequestModel } from '../Models/FoodItemOrder';
import { CredentialsStorageService } from './credentials-storage.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private baseUrl:string = environment.serverUrl + '/food/item/orders';

  constructor(
    private _httpClient: HttpClient,
    private _credentialsStorageService: CredentialsStorageService
  ) {
  }

  createNewOrder(foodItemsInOrder: FoodItem[]) {
    const newOrder = new OrdersRequestModel(
      this._credentialsStorageService.getUserId(),
      -100,
      foodItemsInOrder
    );

    return this._httpClient.post(this.baseUrl, newOrder);
  }

  getAllOrderForUser() {
    const params = new HttpParams().append(
      'id',
      this._credentialsStorageService.getUserId().toString()
    );
    return this._httpClient.get(this.baseUrl, { params });
  }
}
