import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './component/products/products.component';

// @ts-ignore

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegisterComponent},
  {path: 'products/:id', component: ProductsComponent},

  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})

export class AppRoutingModule {

}
