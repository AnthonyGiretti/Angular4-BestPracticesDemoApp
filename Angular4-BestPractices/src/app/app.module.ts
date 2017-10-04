import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CartAlertComponent } from './components/cart-alert/cart-alert.component';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './Services/CartService';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { PaymentComponent } from './components/payment/payment.component';
import { PizzaMenuComponent } from './components/pizza-menu/pizza-menu.component';
import { PizzaService } from './Services/PizzaService';

const appRoutes: Routes = [
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'}
  ,
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    PizzaMenuComponent,
    CartComponent,
    CartAlertComponent,
    PaymentComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpModule,
  ],
  providers: [PizzaService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
