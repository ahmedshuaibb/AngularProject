import { Injectable } from '@angular/core';
import { HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  id: any;
  product: any;
  constructor(private http: HttpClient) { }

  ProductList(): Observable<object>{
    return this.http.get('https://fakestoreapi.com/products');
  }
  ProductDetail(): Observable<object>{
    return this.http.get(this.product);
  }
  setId(ID){
    this.id=ID;
    this.product='https://fakestoreapi.com/products/'+this.id;
  }
  getId()
  {
    return this.product;
  }
  
}
