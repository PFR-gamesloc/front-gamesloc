import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {InputComponent} from "./components/input/input.component";
import {BtnComponent} from "./components/btn/btn.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CardItemComponent} from "./components/card-item/card-item.component";
import {CarrouselComponent} from "../modules/home/components/carrousel/carrousel.component";
import {HomeTestComponent} from "./components/home-test/home-test.component";
import {SelectComponent} from "./components/select/select.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    NavBarComponent,
    InputComponent,
    BtnComponent,
    FooterComponent,
    CardItemComponent,
    HomeTestComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    RouterLink
  ],
  exports:[
    NavBarComponent,
    InputComponent,
    BtnComponent,
    FooterComponent,
    CardItemComponent,
    HomeTestComponent,
    SelectComponent
  ]
})
export class SharedModule { }
