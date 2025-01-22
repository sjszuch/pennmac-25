import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { TypeDialogComponent } from '../type-dialog/type-dialog.component';
import { ChangeTypeComponent } from '../change-type/change-type.component';

@Component({
  selector: 'app-cart-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogActions, MatDialogContent],
  templateUrl: './cart-dialog.component.html',
  styleUrl: './cart-dialog.component.scss'
})
export class CartDialogComponent implements OnInit {
  constructor(private dialog: MatDialog, private cartService: CartService) {}

  orderType: any;

  cartItems: any;

  totalPrice = 0;

  ngOnInit() {
    this.cartItems = this.getAllItems();
    this.orderType = localStorage.getItem('type');
    }

  close() {
    this.dialog.closeAll();
  }

  changeType() {
    this.close();
    this.dialog.open(ChangeTypeComponent);
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
    this.cartItems = this.getAllItems();
  }
  
  getAllItems() {
    return this.cartService.getItems();
  }

}
