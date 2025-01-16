import { Component } from '@angular/core';
import { CategoryCardComponent } from "../category-card/category-card.component";

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [CategoryCardComponent],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss'
})
export class HeroPageComponent {

}
