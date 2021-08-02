import { Component, OnInit } from '@angular/core';
import { CredentialsStorageService } from 'src/app/Services/credentials-storage.service';
import { FoodItemService } from 'src/app/Services/food-item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  allFoodItems: any;
  allFoodItemsOriginalCopy: any;

  isAdmin: boolean = false;

  constructor(
    private _foodItemService: FoodItemService,
    private _credentialsStorageService: CredentialsStorageService
  ) {}

  ngOnInit(): void {
    if (this._credentialsStorageService.isLogenIn()) {
      this.isAdmin = this._credentialsStorageService.getAdminStatus();
    }
    this._foodItemService.getAllFoodItems().subscribe((response: any) => {
      if (response) {
          this.allFoodItems = (this.isAdmin) ? ([...response]) : ([...this.filterOutPrivateItems(response)]);
          this.allFoodItemsOriginalCopy = [...this.allFoodItems];
      }
    });
  }

  filterOutPrivateItems(response:any){

    return response.filter((foodItem:any) => foodItem["publicVisiblity"] === true);
  }

  refreshDashboard() {
    this.ngOnInit();
  }

  getFoodItemFilteredById(idToFindFor: number) {
    return this.allFoodItems.filter(
      (foodItem: any) => foodItem['id'] === idToFindFor
    );
  }

  deleteFoodItem(event: any) {
    console.log('Got delete event');
    if (confirm('Are you sure want to delete this item ?'))
      this._foodItemService
        .deleteFoodItemWithId(event)
        .subscribe((response: any) => {
          this.refreshDashboard();
        });
  }

  updateFoodItemVisiblity(event: any) {
    let foodItemToChangeVisibilityOf = this.getFoodItemFilteredById(
      parseInt(event)
    );
    if (foodItemToChangeVisibilityOf) {
      const visibilityUpdatedItem = {
        ...foodItemToChangeVisibilityOf[0],
        publicVisiblity: !foodItemToChangeVisibilityOf[0]['publicVisiblity'],
      };

      this._foodItemService
        .updateFoodItem(visibilityUpdatedItem)
        .subscribe((response: any) => {
          if (response) {
            this.refreshDashboard();
          }
        });
    }
  }

  searchForFood(event: any) {
    if (!event) this.allFoodItems = [...this.allFoodItemsOriginalCopy];
    else {
      const searchResults = this.allFoodItems.filter((foodItem: any) => {
        console.log(foodItem['title']);
        return (
          foodItem['title'].toLowerCase().includes(event) ||
          foodItem['description'].toLowerCase().includes(event) ||
          foodItem['price'].toString().toLowerCase().includes(event)
        );
      });

      if (searchResults) {
        this.allFoodItems = [...searchResults];
      }
    }
  }

  filterByRating(ratingToFilterBy: number) {
    this.allFoodItems = this.allFoodItemsOriginalCopy.filter(
      (foodItem: any) => foodItem['rating'] === ratingToFilterBy
    );
  }

  sortFoodItems(sortingOrder: string) {
    if (!this.allFoodItems)
      this.allFoodItems = [...this.allFoodItemsOriginalCopy];

    if (sortingOrder === 'lth')
      this.allFoodItems.sort(
        (foodItem1: any, foodItem2: any) =>
          foodItem1['price'] - foodItem2['price']
      );
    else
      this.allFoodItems.sort(
        (foodItem1: any, foodItem2: any) =>
          foodItem2['price'] - foodItem1['price']
      );
  }

  filterFoodItems(event: any) {
    if(event['rating'] === "all")
      this.allFoodItems  = [...this.allFoodItemsOriginalCopy]
    else
    this.filterByRating(parseInt(event['rating'].replace('star', '')));
    this.sortFoodItems(event['sort'])
    console.log(event);
  }

  updateFoodItemsByFetchedCategory(event:any){
    if(event){
      this.allFoodItems = [...event]
      this.allFoodItemsOriginalCopy = [...event]
    }
    

  }
}
