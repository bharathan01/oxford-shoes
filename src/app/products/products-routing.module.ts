import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { combineLatest } from 'rxjs';
import { AllProductsComponent } from './all-products/all-products.component';

const routes: Routes = [{ path: '', component: ProductsComponent },
{ path: 'addProduct', component: AddProductComponent },
{ path: 'ViewProduct/:id', component: ViewProductComponent },
{ path: 'editProduct/:id', component: EditProductComponent },
{ path: 'deleteProduct', component: DeleteProductComponent },
{ path: 'allProducts', component:AllProductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

