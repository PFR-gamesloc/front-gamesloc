import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { InputComponent } from "./components/input/input.component";
import { BtnComponent } from "./components/btn/btn.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeTestComponent } from "./components/home-test/home-test.component";
import { SelectComponent } from "./components/select/select.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { RouterLink } from "@angular/router";
import { InputPasswordComponent } from "./components/input-password/input-password.component";
import { ErrorMessageComponent } from "./components/error-message/error-message.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapTrash, bootstrapFacebook, bootstrapTwitter, bootstrapTiktok, bootstrapInstagram, bootstrapCart, bootstrapPersonCircle, bootstrapStar, bootstrapArrowReturnLeft, bootstrapHeartFill } from '@ng-icons/bootstrap-icons';
import { CartItemComponent } from './components/cart-item/cart-item.component'
import { CoreModule } from "../core/core.module";
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
@NgModule({
  declarations: [
    NavBarComponent,
    InputComponent,
    BtnComponent,
    FooterComponent,
    HomeTestComponent,
    SelectComponent,
    InputPasswordComponent,
    ErrorMessageComponent,
    SearchBarComponent,
    CartItemComponent,
    DropdownMenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    RouterLink,
    NgIconsModule.withIcons({
      bootstrapTrash,
      bootstrapFacebook,
      bootstrapTwitter,
      bootstrapTiktok,
      bootstrapInstagram,
      bootstrapCart,
      bootstrapPersonCircle,
      bootstrapStar,
      bootstrapArrowReturnLeft,
      bootstrapHeartFill
    }),
    CoreModule
  ],
  exports: [
    NavBarComponent,
    InputComponent,
    BtnComponent,
    FooterComponent,
    HomeTestComponent,
    SelectComponent,
    InputPasswordComponent,
    CartItemComponent
  ]
})
export class SharedModule { }
