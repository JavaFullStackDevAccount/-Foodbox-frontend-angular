import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CredentialsStorageService } from 'src/app/Services/credentials-storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  @Input('amountPayable') amountPayable: number = 0;
  @Output('addToOrders') addToOrders = new EventEmitter<boolean>();

  handler: any = null;

  constructor(private _credentialsStorageService: CredentialsStorageService) {}

  ngOnInit() {
    this.loadStripe();
  }

  pay() {
    var handler = (<any>window).StripeCheckout.configure({
      key:
        'pk_test_51J131XSDVP2jheDUTpsaYujCA28ABYqHYS8gSZwkgslwK6vhYOq82RQrcgZLFan6sJy4YyAkwIFAjahWEAVZ1mrd00hq7QgVfL',
      locale: 'auto',
      currency: 'inr',
      email: this._credentialsStorageService.getEmail(),
      token: (token: any) => {
        if (token) {
          alert('Payment Successfull !!');
          this.addToOrders.emit(true);
        } else {
          alert('Problem in payment !!!!');
        }
      },
    });

    handler.open({
      name: 'Food box purchase',
      description: 'Checkout',
      amount: this.amountPayable * 100,
    });
  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
          locale: 'auto',
          currency: 'inr',
          token: function (token: any) {
            alert('Payment Success!!');
          },
        });
      };

      window.document.body.appendChild(s);
    }
  }
}
