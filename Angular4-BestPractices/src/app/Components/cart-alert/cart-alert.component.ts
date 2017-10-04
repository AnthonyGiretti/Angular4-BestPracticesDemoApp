import { Component, OnDestroy, OnInit } from '@angular/core';

import { Pizza } from './../../Models/Pizza';
import { PizzaService } from './../../Services/PizzaService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-alert',
  templateUrl: './cart-alert.component.html',
  styleUrls: ['./cart-alert.component.css']
})
export class CartAlertComponent implements OnInit, OnDestroy {

  constructor(private _pizzaService: PizzaService) { }

  congrats: String = "Good choice !!!!";
  private _pizzaSubscription: Subscription;
  pizza: Pizza;
  
  ngOnInit() {
    this._pizzaSubscription = this._pizzaService.getSelectedPizza().subscribe(results => { this.pizza = results });
  }

  getSelectedPizzaText()
  {
    return `Your selected ${ this.pizza.Name } !!`
  }

  ngOnDestroy() {
    this._pizzaSubscription.unsubscribe();
  }
}
