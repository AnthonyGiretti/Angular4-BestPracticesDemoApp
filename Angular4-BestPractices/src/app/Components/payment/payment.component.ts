import { Component, OnInit } from '@angular/core';

import { CartService } from './../../Services/CartService';
import { Pizza } from './../../Models/Pizza';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  private _cartSubscription: Subscription;
  pizzasInCart: Pizza[];
  constructor(private _cartService: CartService) { }

  ngOnInit() {
    this._cartSubscription = this._cartService.getCart().subscribe(results => { this.pizzasInCart = results });
  }

  getTotal(): String {
    var total = this.pizzasInCart.reduce((a, b) => a + b.Price, 0);
    return `Your have to pay <strong>${total} $</strong>`;
  }

  ngOnDestroy() {
    this._cartSubscription.unsubscribe();
  }

}
