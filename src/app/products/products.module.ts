import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FasionTipsModule } from '../fasion-tips/fasion-tips.module';
import { AllProductsComponent } from './all-products/all-products.component';
import { HttpClientModule }   from '@angular/common/http';
import { FilterPipe } from './pipe/filter.pipe'
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ViewAllProductsComponent,
    ViewProductComponent,
    AddProductComponent,
    DeleteProductComponent,
    EditProductComponent,
    AllProductsComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FasionTipsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

   
  ]
})
export class ProductsModule { }
