import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import {HttpClientModule} from "@angular/common/http";
import {InscriptionPageComponent} from "./modules/users/pages/inscription-page/inscription-page.component";
import { ConnexionPageComponent } from './modules/users/pages/connexion-page/connexion-page.component';
import { ErrorMessageComponent } from './shared/components/error-message/error-message.component';

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
    HomePageComponent,
    InscriptionPageComponent,
    ConnexionPageComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
