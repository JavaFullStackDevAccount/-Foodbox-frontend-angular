import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { CredentialsStorageService } from 'src/app/Services/credentials-storage.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent implements OnInit {
  @Input('foodItemInfo') foodItemInfo: any;

  @Output() deleteFoodItemEvent = new EventEmitter<number>();

  @Output() updateFoodItemVisibilityEvent = new EventEmitter<number>();

  public: boolean = true;

  isUserAdmin:boolean = false;

  isLoggedIn:boolean = false;

  constructor(
    private _router: Router,
    private _cartService: CartService,
    private _credentialsStorageService: CredentialsStorageService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this._credentialsStorageService.isLogenIn();
    if(this.isLoggedIn)
      this.isUserAdmin = this._credentialsStorageService.getAdminStatus();
  }

  getRatingsArray(): number[] {
    let ratingsArray: number[] = [];

    for (let i = 0; i < this.foodItemInfo['rating']; i++) ratingsArray.push(1);

    return ratingsArray;
  }

  togglePublic() {
    this.public = !this.public;
  }

  goToEditThisFoodItem(foodItemId: number) {
    this._router.navigateByUrl('/edit/food/' + foodItemId);
  }

  deleteFoodItem(idOfFoodItemToDelete: number) {
    this.deleteFoodItemEvent.emit(idOfFoodItemToDelete);
  }

  updateFoodItemVisiblity(idOfFoodItemToUpdate: number) {
    this.updateFoodItemVisibilityEvent.emit(idOfFoodItemToUpdate);
  }

  addItemToCart(idOfItemToAdd: number) {
    this._cartService.addItemToCart(idOfItemToAdd).subscribe(
      (response: any) => {
        if (response) alert('Item added to cart');
        else alert('Unable to add item to cart !!!');
      },
      (err) => alert('Unable to add item to cart !!!')
    );
  }
}
