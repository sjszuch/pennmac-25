import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeaturedComponent } from "./components/featured/featured.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeaturedComponent, ProductCardComponent, NavbarComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pennmac-25';
}
