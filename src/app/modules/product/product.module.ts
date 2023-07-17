import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {ProductPageComponent} from "./pages/product-page/product-page.component";



@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
