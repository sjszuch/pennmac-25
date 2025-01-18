import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  cartNumber: number;
  
  constructor(private cartService: CartService) {
    this.cartNumber = this.cartService.numberOfItems();
  }

  readonly dialog = inject(MatDialog);
  
  openCartDialog() {
    this.dialog.open(CartDialogComponent);
  }
}
