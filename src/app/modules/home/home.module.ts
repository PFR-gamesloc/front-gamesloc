import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CarrouselComponent} from "./components/carrousel/carrousel.component";
import {SharedModule} from "../../shared/shared.module";
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapArrowLeftCircle,bootstrapArrowRightCircle} from '@ng-icons/bootstrap-icons';
import { CardItemComponent } from 'src/app/modules/home/components/card-item/card-item.component';


@NgModule({
  declarations: [
    CarrouselComponent,
    HomePageComponent,
    CardItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgIconsModule.withIcons({bootstrapArrowLeftCircle,bootstrapArrowRightCircle}),
  ]
})
export class HomeModule { }
