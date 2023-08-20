import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {CartPageComponent} from "./pages/cart-page/cart-page.component";
import {CartItemComponent} from "./components/cart-item/cart-item.component";
import {NgIconsModule} from "@ng-icons/core";
import {bootstrapTrash} from "@ng-icons/bootstrap-icons";

@NgModule({
  declarations: [
    CartPageComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    NgIconsModule.withIcons({bootstrapTrash})
  ]
})
export class CartModule { }
