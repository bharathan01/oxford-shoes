import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  pId:any
  pData:any
  constructor( private ar:ActivatedRoute, private ps:ProductsService ,private route:Router){

  }
  
  ngOnInit():void{
    this.ar.params.subscribe((data:any) => {
      this.pId = data["id"]
    })

    this.ps.viewProducts(this.pId).subscribe((data:any) =>{
      this.pData = data

    })


  }
  updateProduct(form:any){
   this.ps.updateProduct(this.pId,this.pData).subscribe((item:any) => {
    alert('Product Details Updated')
    this.route.navigateByUrl('/products/allProducts')

   })

  }

}
