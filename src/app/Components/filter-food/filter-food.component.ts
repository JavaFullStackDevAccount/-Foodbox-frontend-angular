import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-food',
  templateUrl: './filter-food.component.html',
  styleUrls: ['./filter-food.component.scss'],
})
export class FilterFoodComponent implements OnInit {
  @Output('filterEventEmit') filterEventEmit =
    new EventEmitter<filterEventFormat>();

  public panelOpenState: boolean = false;

  filterRatings: any = '3star';

  sortBy: any = 'lth';

  constructor() {}

  ngOnInit(): void {}

  applySelectedFilters() {
    console.clear();

    console.log(this.filterRatings);
    console.log(this.sortBy);

    this.filterEventEmit.emit(
      new filterEventFormat(this.filterRatings, this.sortBy)
    );
  }
}

class filterEventFormat {
  constructor(private rating: string, private sort: string) {}
}
