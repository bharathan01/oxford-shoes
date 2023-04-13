import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit { 

   productId:any
   productDetails:any

  constructor( private ps: ProductsService , private ar:ActivatedRoute, private route:Router){

  }
  ngOnInit(): void{
    this.ar.params.subscribe((item:any) =>{
      this.productId = item["id"]
     //api call for get the product details

     this.ps.viewProducts(this.productId).subscribe((data:any) =>{
      this.productDetails = data
     })

      
    })


  }
  delete(){
    alert('Do you want to delete this products')
    this.ps.deleteProduct(this.productId).subscribe((item:any) => {
      alert('Product deleted')
      this.route.navigateByUrl("")
      
     })
   


  }

}
