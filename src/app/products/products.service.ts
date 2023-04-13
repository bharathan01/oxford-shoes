import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
 
  //api call for view all products
  viewAllProducts(){
    return this.http.get('http://localhost:3000/posts')
  }

  //api call to get the product id from the URL
  viewProducts(productId:any){
    return this.http.get('http://localhost:3000/posts/'+productId)
  }

  //api call for delete product
  deleteProduct(productId:any){
    return this.http.delete('http://localhost:3000/posts/'+productId)

  }
  //add product
   addNewProducts(product:any){
    return this.http.post('http://localhost:3000/posts' , product)
   }

   //update the product
  updateProduct(productID:any,productData:any){
    return this.http.put('http://localhost:3000/posts/'+productID ,productData)

  }

}

 