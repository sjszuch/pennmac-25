import { Component, inject } from '@angular/core';
import { Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, MatIconModule, CommonModule, MatTooltipModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() price!: string;
  @Input() description!: string;
  @Input() pickupOnly!: boolean;

  cartService: CartService = inject(CartService);

  cartItems = this.cartService.getItems();

  constructor() {
    this.cartItems = this.cartService.getItems();
  }

  private _snackBar = inject(MatSnackBar);

  private _dialog = inject(MatDialog);

  openSnackBar(message: string, action: string) {
    let snackBarRef = this._snackBar.open(message, action, {
      duration: 2000
    });

    snackBarRef.onAction().subscribe(() => {
      this._dialog.open(CartDialogComponent);
    });
  }

  addToCart() {
    this.cartService.addItem({
      image: this.image,
      title: this.title,
      price: this.price,
      description: this.description,
      pickuponly: this.pickupOnly
    });

    this.openSnackBar('Item added!', 'View Cart');
  }
}
