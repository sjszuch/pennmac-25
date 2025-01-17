import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [
  ];

  getItems() {
    return this.cartItems;
  }

  numberOfItems() {
    return this.cartItems.length;
  }

  addItem(item: any) {
    this.cartItems.push(item);
  }
  

  constructor() { }
}
