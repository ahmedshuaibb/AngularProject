import { Component, OnInit } from '@angular/core';
import {SearchService} from'../../../serves/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  term: string;
  data: any;
  constructor(private userservice: SearchService, private route:Router) { }

//view details
  setProducId(id){
    localStorage.setItem('id',id);
    this.route.navigate(['/product']);
  }
  ///cart
   addProduct(product){
     let obj={"id":product.id,"title":product.title,"price":product.price,"count":1,"image":product.image}
    let products = [];
    
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push(obj);
    localStorage.setItem('products', JSON.stringify(products));
     this.route.navigate(['/cart']);
}
 
  ngOnInit(): void {
  
    this.userservice.ProductList().subscribe({
      next: (data) => {
        this.data=data; 
      },
      error: (msg) => {
        console.log('error',msg);
      }
    })
    
    
  }
  }


