import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogActions, MatDialogContent],
  templateUrl: './cart-dialog.component.html',
  styleUrl: './cart-dialog.component.scss'
})
export class CartDialogComponent implements OnInit {
  constructor(private dialog: MatDialog, private cartService: CartService) {}

  cartItems: any;

  ngOnInit() {
    this.cartItems = this.getAllItems();
  }

  close() {
    console.log(this.cartItems);
    
    this.dialog.closeAll();
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
    this.cartItems = this.getAllItems();
  }

  
  getAllItems() {
    return this.cartService.getItems();
  }

}
