import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemCartComponent } from './food-item-cart.component';

describe('FoodItemCartComponent', () => {
  let component: FoodItemCartComponent;
  let fixture: ComponentFixture<FoodItemCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodItemCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItemCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
