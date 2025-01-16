import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.scss'
})
export class ShopPageComponent {

  products!: any[];

  constructor() {
    fetch('assets/dummy.json')
      .then(res => res.json())
      .then(data => this.products = data.products);
  }
}
