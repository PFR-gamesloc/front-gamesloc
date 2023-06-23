import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { InputComponent } from "./shared/components/input/input.component";
import { BtnComponent } from "./shared/components/btn/btn.component";
import { ProductPageComponent } from './modules/users/pages/product-page/product-page.component';
import { CardItemComponent } from './shared/components/card-item/card-item.component';
import { HomeTestComponent } from './shared/components/home-test/home-test.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {UserModule} from "./modules/users/user.module";
import { CarrouselComponent } from './shared/components/carrousel/carrousel.component';
import { HomePageComponent } from './modules/users/pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InputComponent,
    BtnComponent,
    FooterComponent,
    ProductPageComponent,
    CardItemComponent,
    HomeTestComponent,
    CarrouselComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
