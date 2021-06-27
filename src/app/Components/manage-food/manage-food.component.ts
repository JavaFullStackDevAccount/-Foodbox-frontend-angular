import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FoodItem } from 'src/app/Models/FoodItem';
import { FoodItemService } from 'src/app/Services/food-item.service';

@Component({
  selector: 'app-manage-food',
  templateUrl: './manage-food.component.html',
  styleUrls: ['./manage-food.component.scss', '../login/login.component.scss'],
})
export class ManageFoodComponent implements OnInit {
  foodItemImageUrl: any = null;

  foodItemId: number = 0;

  foodItemInformationForm: FormGroup = new FormGroup({
    foodItemTitle: new FormControl('', [Validators.required]),
    foodItemPrice: new FormControl('', [
      Validators.required,
      Validators.min(0),
    ]),
    foodItemCuisineType: new FormControl('', [Validators.required]),
    foodItemDiscountPercentage: new FormControl('', [
      Validators.required,
      Validators.min(0),
    ]),
    foodItemRating: new FormControl('', [Validators.required]),
    foodItemImageUrl: new FormControl('', [Validators.required]),
    foodItemDescription: new FormControl('', [Validators.required]),
  });

  componentVisitedForEdit: boolean = false;

  constructor(
    private _router: Router,
    private _activatedRouter: ActivatedRoute,
    private _foodItemService: FoodItemService
  ) {}

  ngOnInit(): void {
    this._activatedRouter.paramMap.subscribe((params: ParamMap) => {
      console.log();
      const id = params.get('id')?.toString();
      if (id) {
        this.foodItemId = parseInt(id);
        this.componentVisitedForEdit = true;
        this.fetchAndPopulateFormWithExistingDetails(parseInt(id));
      }
    });
  }

  fetchAndPopulateFormWithExistingDetails(foodItemId: number) {
    console.log('Fetching details from server and populating form');

    this._foodItemService
      .getFoodItemWithId(foodItemId)
      .subscribe((response: any) => {
        if (response) {
          this.foodItemInformationForm.patchValue({
            foodItemTitle: response['title'],
            foodItemPrice: response['price'],
            foodItemCuisineType: response['category'],
            foodItemDiscountPercentage: response['discount'],
            foodItemRating: response['rating'] + 'star',
            foodItemImageUrl: response['imageUrl'],
            foodItemDescription: response['description'],
          });
          this.foodItemImageUrl = response['imageUrl'];
        }
      });
  }

  showFoodItemImage(event: any) {
    if (event.target.value) {
      this.foodItemImageUrl = event.target.value;
    }
    console.log(event.target.value);
  }

  convertFoodIteFromToObject(): FoodItem {
    const {
      foodItemTitle,
      foodItemPrice,
      foodItemCuisineType,
      foodItemDiscountPercentage,
      foodItemRating,
      foodItemImageUrl,
      foodItemDescription,
    } = this.foodItemInformationForm.controls;

    return new FoodItem(
      this.foodItemId,
      foodItemTitle.value,
      foodItemPrice.value,
      foodItemDiscountPercentage.value,
      foodItemCuisineType.value,
      foodItemImageUrl.value,
      parseInt(foodItemRating.value.replace('star', '')),
      foodItemDescription.value,
      true
    );
  }

  addFoodItem(foodItemObject: FoodItem) {
    this._foodItemService.addFoodItem(foodItemObject).subscribe(
      (response: any) => {
        if (response) {
          alert('Added new food item');
          this._router.navigateByUrl('/');
        } else alert('Unable to add food item');
      },
      (err) =>{console.log(err); alert('Unable to add food item')}
    );
  }

  updateFoodItem(foodItemObject: FoodItem) {
    this._foodItemService.updateFoodItem(foodItemObject).subscribe(
      (response: any) => {
        if (response) {
          alert('Food item updated');
          this._router.navigateByUrl('/');
        } else alert('Unable to update food item');
      },
      (err) => {console.log(err);alert('Unable to update food item')}
    );
  }

  foodItemInformationFromSubmit() {
    if (this.foodItemInformationForm.valid) {
      const foodItemObject = this.convertFoodIteFromToObject();

      if (!this.componentVisitedForEdit) this.addFoodItem(foodItemObject);
      else this.updateFoodItem(foodItemObject);
    } else {
      alert('All fields are required');
    }
  }
}
