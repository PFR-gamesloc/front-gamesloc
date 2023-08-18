import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from "../../shared/shared.module";
import { ProductPageComponent } from "./pages/product-page/product-page.component";
import { CoreModule } from "../../core/core.module";
import { CommentaryComponent } from './components/commentary/commentary.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapStar, bootstrapArrowReturnLeft, bootstrapHeartFill } from '@ng-icons/bootstrap-icons';


@NgModule({
  declarations: [
    ProductPageComponent,
    CommentaryComponent,

  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    CoreModule,
    NgIconsModule.withIcons({ bootstrapStar, bootstrapArrowReturnLeft, bootstrapHeartFill }),
  ],
})
export class ProductModule { }
