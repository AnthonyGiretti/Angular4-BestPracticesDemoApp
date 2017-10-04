import 'rxjs/add/operator/map';

import { EventEmitter, Injectable }     from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import { Pizza }           from '../models/Pizza';

@Injectable()
export class PizzaService {
    
    constructor (private http: Http) {}

    selectedPizzaEmitter: EventEmitter<Pizza> =  new EventEmitter<Pizza>();
    private pizzasUrl = 'http://localhost:60025/api/pizza'; 
     
    // Fetch all existing comments
    public getPizzas() : Observable<Pizza[]> 
    {
         // ...using get request
         return this.http.get(this.pizzasUrl)
                         .map((res:Response) => <Pizza>res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }

    selectPizza(pizza: Pizza)
    {
        this.selectedPizzaEmitter.emit(pizza);
    }

    getSelectedPizza()
    {
        return this.selectedPizzaEmitter;
    }

}
