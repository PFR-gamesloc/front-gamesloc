import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { HomeTestComponent } from './shared/components/home-test/home-test.component';
import { HomePageComponent } from './modules/users/pages/home-page/home-page.component';
import { ProductPageComponent } from './modules/users/pages/product-page/product-page.component';
import { CartPageComponent } from './modules/users/pages/cart-page/cart-page.component';
import { DashboardPageComponent } from './modules/users/pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent
  },
  {
    path: 'product',
    component: ProductPageComponent
  },
  {
    path: 'cart',
    component: CartPageComponent
  },
  {
    path:'dashboard',
    component: DashboardPageComponent
  },
  {
    path: 'test',
    component: HomeTestComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
