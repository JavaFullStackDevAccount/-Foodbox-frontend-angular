import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  ordersAreEmpty: boolean = false;

  ordersFromServer: any = [];

  constructor(private _ordersService: OrdersService) {}

  ngOnInit(): void {
    this._ordersService.getAllOrderForUser().subscribe((response: any) => {
      console.log(response);
      if (response && response.length > 0) {
        this.ordersFromServer = [...response];
        this.ordersAreEmpty = false;
      } else {
        this.ordersAreEmpty = true;
      }
    });
  }
}
