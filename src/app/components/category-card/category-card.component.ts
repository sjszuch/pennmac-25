import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {
  @Input() category: any;
  @Input() description: any;
  @Input() image: any;
  @Input() link: any;
}
