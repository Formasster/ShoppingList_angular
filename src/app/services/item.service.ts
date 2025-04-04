import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url = 'http://localhost:3000/items';

  /*items: Item[] = [ {
    id: 0,
    title: 'manzana',
    price: 1.99,
    quantity: 4,
    completed: false,
  },
  {
    id: 1,
    title: 'pan',
    price: 0.99,
    quantity: 1,
    completed: false,
  },
  {
    id: 2,
    title: 'leche',
    price: 2.99,
    quantity: 1,
    completed: false
  }];*/

  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    //return this.items;
    return this.http.get<Item[]>(this.url);
  }

  addItem(item:Item){
    return this.http.post<Item>(this.url, item); 
  }

  deleteItem(item:Item): Observable<void>{
    const deleteUrl = `${this.url}/${item.id}`;
    return this.http.delete<void>(deleteUrl);
  }


}
