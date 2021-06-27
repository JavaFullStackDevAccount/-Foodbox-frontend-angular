import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodItem } from 'src/app/Models/FoodItem';
import { CartService } from 'src/app/Services/cart.service';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-food-item-cart',
  templateUrl: './food-item-cart.component.html',
  styleUrls: ['./food-item-cart.component.scss'],
})
export class FoodItemCartComponent implements OnInit {
  itemsInCartFromServer: any = [];

  cartIsEmpty: boolean = false;

  totalAmount: number = 0;

  discount: number = 0;

  deliveryCharge: number = 0;

  totalPayable: number = 0;

  constructor(
    private _cartService: CartService,
    private _ordersService: OrdersService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    console.clear();

    this._cartService.getUsersCart().subscribe(
      (response: any) => {
        if (response) {
          if (!response['itemsInCart'] || response['itemsInCart'].length <= 0)
            this.cartIsEmpty = true;
          else {
            this.itemsInCartFromServer = [...response['itemsInCart']];
            console.log(this.itemsInCartFromServer);
            this.totalAmount = response['total'];
            this.discount = response['discount'];
            this.deliveryCharge = response['deliveryCharges'];
            this.totalPayable = response['totalPayable'];
            this.cartIsEmpty = false;
          }
        } else {
          this.cartIsEmpty = true;
        }
      },
      (err) => {
        this.cartIsEmpty = true;
      }
    );
  }

  removeItemFromCart(idOfItemToDelete: number) {
    this._cartService
      .removeItemFromCart(idOfItemToDelete)
      .subscribe((response: any) => {
        if (response) this.ngOnInit();
      });
  }

  isVisible(cartItem: any) {
    console.log(
      "cartItem['publicVisiblity'] -> " + cartItem['publicVisiblity']
    );
    return cartItem['publicVisiblity'];
  }

  addToOrdersAfterPaymentSuccess(event: any) {
    //alert('Adding to orders');
    this._ordersService
      .createNewOrder(this.itemsInCartFromServer as FoodItem[])
      .subscribe((response: any) => {
        this._router.navigateByUrl("/food/item/orders");
          
      });
  }
}
