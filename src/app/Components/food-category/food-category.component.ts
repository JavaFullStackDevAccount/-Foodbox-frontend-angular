import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FoodItemService } from 'src/app/Services/food-item.service';

@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.scss'],
})
export class FoodCategoryComponent implements OnInit {
  @Output('updateItemsWithFetchedCategory') updateItemsWithFetchedCategory =
    new EventEmitter<any>();


  currentSelectionOfCategory:number = 55;

  constructor(private _foodItemService: FoodItemService) {}

  ngOnInit(): void {}

  fetchByCategoryNumber(categoryNumber: number) {

    this.currentSelectionOfCategory = categoryNumber;
    
    this._foodItemService
      .getFoodItemInCategory(categoryNumber)
      .subscribe((response: any) => {
        if (response) this.updateItemsWithFetchedCategory.emit(response);
      });
  }
}
