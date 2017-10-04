import { Component, OnDestroy, OnInit } from '@angular/core';

import { CartService } from './../../Services/CartService';
import { Pizza } from './../../Models/Pizza';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(private _cartService: CartService) { }
  private _cartSubscription: Subscription;
  pizzasInCart: Pizza[];
  isActive: boolean = false;

  ngOnInit() {
    this._cartSubscription = this._cartService.getCart().subscribe(results => { this.pizzasInCart = results });
  }

  getCartCount(): Number {
    return this.pizzasInCart.length;
  }
  
  getTotal(): String {
    var total = this.pizzasInCart.reduce((a, b) => a + b.Price, 0);
    return `<strong>Total :</strong>${total} $`;
  }

  cartClick() : void
  {
    if (this.isActive == false) 
      this.isActive = true;
    else
      this.isActive = false;

  }

  ngOnDestroy() {
    this._cartSubscription.unsubscribe();
  }

  }
