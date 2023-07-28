import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {CoreModule} from "../../core/core.module";
import { CommentaryComponent } from './components/commentary/commentary.component';



@NgModule({
  declarations: [
    ProductPageComponent,
    CommentaryComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class ProductModule { }
