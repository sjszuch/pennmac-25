import { Component, inject } from '@angular/core';
import { Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

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



  addToCart() {
    
    this.cartService.addItem({
      image: this.image,
      title: this.title,
      price: this.price,
      description: this.description
    });

    console.log(this.cartService.getItems());
  }
}
