import 'rxjs/add/operator/map';

import { EventEmitter, Injectable }     from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import { Pizza }           from '../models/Pizza';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {
    
    constructor (private http: Http) {}

    private _pizzasInCart: Pizza[] = new Array();

    addToCart(pizza: Pizza)
    {
        this._pizzasInCart.push(pizza);
    }

    getCart() : Observable<Pizza[]>
    {
        return Observable.of(this._pizzasInCart);
    }

}
