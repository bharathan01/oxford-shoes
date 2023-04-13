import { Component, OnInit,Injectable} from '@angular/core';
import { ProductsService } from '../products.service';
import { ViewAllProductsComponent } from '../view-all-products/view-all-products.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  productsList:any
  productCategory:any
  searchData:any=" "
  
    constructor(private ps:ProductsService){
      
     
    }
    ngOnInit():void{
      this.ps.viewAllProducts().subscribe(data =>{
        this.productsList = data
      })
     
      

      
    }
    
    productsBycatagoty(category:any ,gender:any ){
      this.productCategory = this.productsList.filter((products:any) => 
      products.categoryId == category  || category == " " && products.gender == gender || gender == " " )
      
    }
    search(event:any){
      this.searchData = event.target.value  
    }
    
    
    
}
