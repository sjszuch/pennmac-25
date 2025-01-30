import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-item-page',
  standalone: true,
  imports: [],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.scss'
})
export class ItemPageComponent {
  @Input() item!: any;
  @Input() image!: string;
  @Input() title!: string;
  @Input() price!: string;

}
