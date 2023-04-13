import { Component, Injectable, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { AllProductsComponent } from '../all-products/all-products.component';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  productsList :any

  constructor (private ps :ProductsService ,private view:AllProductsComponent, private route:Router) {
    
  }

  ngOnInit(){
    this.ps.viewAllProducts().subscribe(data =>{
      this.productsList = data
    })


  }
  viewAll(){
    this.route.navigateByUrl('/products/allProducts')
  }

}
