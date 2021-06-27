import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFoodComponent } from './filter-food.component';

describe('FilterFoodComponent', () => {
  let component: FilterFoodComponent;
  let fixture: ComponentFixture<FilterFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
