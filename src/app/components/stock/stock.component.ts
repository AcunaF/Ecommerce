import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  productForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      product: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  addProduct() {
    console.log(this.productForm.value);
  }
}
