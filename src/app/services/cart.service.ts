import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemsSubject = new BehaviorSubject<any[]>(this.cartItems);

  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  getItems() {
    return this.cartItems;
  }

  numberOfItems() {
    return this.cartItems.length;
  }

  addItem(item: any) {
    this.cartItems.push(item);
    this.cartItemsSubject.next([...this.cartItems]);
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter((i) => i !== item);
    this.cartItemsSubject.next([...this.cartItems]);
  }
}
