import { Component } from '@angular/core';
import { CategoryCardComponent } from "../category-card/category-card.component";
import { ProductCardComponent } from "../product-card/product-card.component";
import { MatDialog } from '@angular/material/dialog';
import { TypeDialogComponent } from '../type-dialog/type-dialog.component';
import { OnInit } from '@angular/core';
import { BotNavComponent } from "../bot-nav/bot-nav.component";

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [CategoryCardComponent, ProductCardComponent, BotNavComponent],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss'
})
export class HeroPageComponent {
  constructor(private dialog: MatDialog) {}
}
