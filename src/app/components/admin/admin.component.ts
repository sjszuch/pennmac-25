import { Component, ViewChild, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import {addDoc, collection} from 'firebase/firestore';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  @ViewChild('productForm') productForm: any;
  firestore: Firestore = inject(Firestore);
  

  async saveData() {
    const acollection = collection(this.firestore, '/products');
    addDoc(acollection, {
      'name': this.productForm.value.name,
      'price': this.productForm.value.price,
      'description': this.productForm.value.description,
      'image': this.productForm.value.image
    });
  }

  // This function resets the form- to be used when it is submitted
  resetForm() {
    this.productForm.reset({
      name: '',
      price: '',
      description: '',
      image: ''
    });
  }

  // This function submits the user's form and resets it
  submitProduct() {
    alert('Product submitted');
    alert(this.productForm.value.name + ' ' + this.productForm.value.price + ' ' + this.productForm.value.description); 
    this.saveData();
    this.resetForm();
  }


}
