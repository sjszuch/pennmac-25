import { Component } from '@angular/core';
import { CategoryCardComponent } from "../category-card/category-card.component";
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [CategoryCardComponent, ProductCardComponent],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss'
})
export class HeroPageComponent {

}
