import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from "../../shared/shared.module";
import { ProductPageComponent } from "./pages/product-page/product-page.component";
import { CoreModule } from "../../core/core.module";
import { CommentaryComponent } from './components/commentary/commentary.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapStar, bootstrapArrowReturnLeft } from '@ng-icons/bootstrap-icons';
import {NgbRating} from "@ng-bootstrap/ng-bootstrap";
import {CommentaryFormComponent} from "./components/commentary-form/commentary-form.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductPageComponent,
    CommentaryComponent,
    CommentaryFormComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    CoreModule,
    NgIconsModule.withIcons({bootstrapStar, bootstrapArrowReturnLeft}),
    NgbRating,
    ReactiveFormsModule,
  ],
  providers:[]
})
export class ProductModule { }
