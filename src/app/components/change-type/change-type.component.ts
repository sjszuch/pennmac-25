import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-change-type',
  standalone: true,
  imports: [],
  templateUrl: './change-type.component.html',
  styleUrl: './change-type.component.scss'
})
export class ChangeTypeComponent {
  constructor(private dialog: MatDialog) {}
    cartService: CartService = inject(CartService);

  setType(type: any) {
    localStorage.setItem('type', type);
    this.dialog.closeAll();
    window.location.reload();
  }
}
