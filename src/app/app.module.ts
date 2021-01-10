import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputsearchPipe } from './inputsearch.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductDetailsComponent,
    NavComponent,
    ListComponent,
    CartComponent,
    InputsearchPipe,
    CheckoutComponent,
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule , 
    BrowserAnimationsModule,
    ReactiveFormsModule
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
