import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-type-dialog',
  standalone: true,
  imports: [],
  templateUrl: './type-dialog.component.html',
  styleUrl: './type-dialog.component.scss'
})
export class TypeDialogComponent {
  constructor(private dialog: MatDialog) {}
    cartService: CartService = inject(CartService);

  setType(type: any) {
    localStorage.setItem('type', type);
    this.dialog.closeAll();
  }
}
