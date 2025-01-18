import { Component, inject } from '@angular/core';
import { Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { provideAnimations } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() price!: string;
  @Input() description!: string;

  cartService: CartService = inject(CartService);


  cartItems = this.cartService.getItems();

  constructor() {
    this.cartItems = this.cartService.getItems();
  }

  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  addToCart() {
    
    this.cartService.addItem({
      image: this.image,
      title: this.title,
      price: this.price,
      description: this.description
    });

    this._snackBar.open('Item added!', 'Close', {
      duration: 2000
    });

  }
}
