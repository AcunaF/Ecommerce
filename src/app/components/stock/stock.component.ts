import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/models/product.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  productForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
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
    console.log(this.productForm);
    const PRODUCTO: Products = {
      name: this.productForm.get('product')?.value,
      price: this.productForm.get('price')?.value,
      description: this.productForm.get('description')?.value,
      image: this.productForm.get('image')?.value,
      category: this.productForm.get('category')?.value,
      quantity: this.productForm.get('quantity')?.value,
    };

    console.log(PRODUCTO);
    this.toastr.success('Register Succes', 'Producto registrado con exito');
    this.router.navigate(['/editStock/:id']);
  }
}
