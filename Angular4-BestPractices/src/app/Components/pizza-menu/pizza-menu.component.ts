import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { CartService } from './../../Services/CartService';
import { Pizza } from './../../Models/Pizza';
import { PizzaService } from './../../Services/PizzaService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pizza-menu',
  templateUrl: './pizza-menu.component.html',
  styleUrls: ['./pizza-menu.component.css']
})
export class PizzaMenuComponent implements OnInit, OnDestroy {

  private _pizzaSubscription: Subscription;
  pizzas: Pizza[];

  constructor(private _pizzaService: PizzaService, private _cartService: CartService) { }

  ngOnInit() {
    
    this._pizzaSubscription = this._pizzaService.getPizzas().subscribe(results => { this.pizzas = results });
  }

  onClick(pizza: Pizza) {
    this._pizzaService.selectPizza(pizza);
    this._cartService.addToCart(pizza);
  }

  ngOnDestroy() {

    this._pizzaSubscription.unsubscribe();
    
  }

}
