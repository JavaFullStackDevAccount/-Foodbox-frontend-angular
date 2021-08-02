import { FoodItem } from './FoodItem';

export class OrdersRequestModel {
  constructor(
    private userId: number,
    private userCartId: number,
    private foodItemsToAddInOrder: FoodItem[]
  ) {}
}
