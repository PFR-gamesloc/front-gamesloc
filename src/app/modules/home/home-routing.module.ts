import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import { ProductPageComponent } from '../product/pages/product-page/product-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'game/:id', component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
