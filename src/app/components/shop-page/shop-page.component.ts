import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Firestore, collection, addDoc, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  products: any[] = [];

  @ViewChild('productForm') productForm: any;
  firestore: Firestore = inject(Firestore);

  async ngOnInit() {
    await this.loadAllProducts();
  }

  async saveData() {
    const acollection = collection(this.firestore, '/products');
    await addDoc(acollection, {
      'name': this.productForm.value.name,
      'price': this.productForm.value.price,
      'description': this.productForm.value.description,
      'image': this.productForm.value.image
    });
  }

  resetForm() {
    this.productForm.reset({
      name: '',
      price: '',
      description: '',
      image: ''
    });
  }

  async loadAllProducts() {
    const acollection = collection(this.firestore, '/products');
    const snapshot = await getDocs(acollection);
    this.products = snapshot.docs.map(doc => doc.data());
    console.log(this.products);
  }

  async submitProduct() {
    alert('Product submitted');
    alert(this.productForm.value.name + ' ' + this.productForm.value.price + ' ' + this.productForm.value.description); 
    await this.saveData();
    this.resetForm();
    await this.loadAllProducts();
  }
}
