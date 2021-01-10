import { Component, OnInit } from '@angular/core';
import {SearchService} from'../../../serves/list.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  data: any;
  constructor(private userservice: SearchService) { }
  ngOnInit() {
    this.userservice.setId(localStorage.getItem('id'));
    this.userservice.ProductDetail().subscribe({
      next: (data) => {
        this.data=data;
      },
      error: (msg) => {
        console.log('error',msg);
      }
  })
  
  }

}
