import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavberComponent } from './component/navber/navber.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule} from '@angular/common/http';
import { CartComponent } from './component/cart/cart.component';

import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './component/products/products.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavberComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
