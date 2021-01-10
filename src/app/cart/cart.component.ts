import { Component, OnInit } from '@angular/core';
import {SearchService} from'../../../serves/list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  addcart:Array<object>=[];                     
  data: any;
  constructor(private userservice: SearchService) { }

  ngOnInit(): void {
    let list=[];
    let index=0;
    this.addcart=JSON.parse(localStorage.getItem('products')); 
  console.log(this.addcart);
  
  //   for (let i = 0; i < this.addcart.length; i++) {
  //     let id=this.addcart[i]['productId'];
  //     console.log(id);

  //   this.userservice.setId(id);
  //   this.userservice.ProductDetail().subscribe({
  //     next: (data) => {
        
  //       list[index]=data;
  //       index++;
  //       console.log(data);
        
  //       list.push(this.data);
        
  //     },
  //     error: (msg) => {
  //       console.log('error',msg);
  //     }
  //    })
    
  //  }
  //  this.data=list;
}
   
    

}
