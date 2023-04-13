import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private fb: FormBuilder, private ps: ProductsService, private route :Router) {

  }
  ngOnInit(): void {
  }
  addProduct = this.fb.group({

    id: [""],
    productName: [""],
    categoryId: [""],
    gender: [""],
    discription: [""],
    price: [""],
    isAvailable: [""],
    productImage: [""],
    rating: [""],
    review: [""],
    vendorName: [""],
    warrenty: [""]
  })
  addNewProduct() {
    let productData = {
      id: this.addProduct.value.id,
      productName: this.addProduct.value.productName,
      categoryId: this.addProduct.value.categoryId,
      gender: this.addProduct.value.gender,
      discription: this.addProduct.value.discription,
      price: this.addProduct.value.price,
      isAvailable: this.addProduct.value.isAvailable,
      productImage: this.addProduct.value.productImage,
      rating: this.addProduct.value.rating,
      review: this.addProduct.value.review,
      vendorName: this.addProduct.value.vendorName,
      warrenty: this.addProduct.value.warrenty

    }
    this.ps.addNewProducts(productData).subscribe((item: any) => {
      alert('New Product Added ')
      this.route.navigateByUrl('/products/allProducts')

    })
  }

}
