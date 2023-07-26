import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {InputComponent} from "./components/input/input.component";
import {BtnComponent} from "./components/btn/btn.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CardItemComponent} from "./components/card-item/card-item.component";
import {HomeTestComponent} from "./components/home-test/home-test.component";
import {SelectComponent} from "./components/select/select.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {RouterLink} from "@angular/router";
import {InputPasswordComponent} from "./components/input-password/input-password.component";
import {CommentaryComponent} from "./components/commentary/commentary.component";
import {ErrorMessageComponent} from "./components/error-message/error-message.component";
import {SearchBarComponent} from "./components/search-bar/search-bar.component";
import { AccordionListItemComponent } from './components/accordion-list-item/accordion-list-item.component';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list"
import { MatDividerModule } from "@angular/material/divider";
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component'



@NgModule({
  declarations: [
    NavBarComponent,
    InputComponent,
    BtnComponent,
    FooterComponent,
    CardItemComponent,
    HomeTestComponent,
    SelectComponent,
    InputPasswordComponent,
    CommentaryComponent,
    ErrorMessageComponent,
    SearchBarComponent,
    AccordionListItemComponent,
    AccordionItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    RouterLink, 
    MatExpansionModule,
    MatListModule,
    MatDividerModule
  ],
  exports:[
    NavBarComponent,
    InputComponent,
    BtnComponent,
    FooterComponent,
    CardItemComponent,
    HomeTestComponent,
    SelectComponent,
    InputPasswordComponent,
    CommentaryComponent,  
    AccordionListItemComponent, 
    AccordionItemComponent
  ]
})
export class SharedModule { }
