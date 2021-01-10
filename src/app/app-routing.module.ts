import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from '../app/product-details/product-details.component';
import { ListComponent } from '../app/list/list.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  
  {path:"product",component: ListComponent},
  {path:"cart",component: CartComponent},
  {path:"product",component: ProductDetailsComponent},
  {path:"", component:ListComponent},
  {path:"checkout", component:CheckoutComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
