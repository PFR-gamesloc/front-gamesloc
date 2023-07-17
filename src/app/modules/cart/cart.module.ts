import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {CartPageComponent} from "./pages/cart-page/cart-page.component";



@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule { }
