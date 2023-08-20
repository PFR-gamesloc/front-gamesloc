import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "./components/navbarComponents/nav-bar/nav-bar.component";
import { InputComponent } from "./components/formComponents/input/input.component";
import { BtnComponent } from "./components/btn/btn.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SelectComponent } from "./components/select/select.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { RouterLink } from "@angular/router";
import { InputPasswordComponent } from "./components/formComponents/input-password/input-password.component";
import { ErrorMessageComponent } from "./components/formComponents/error-message/error-message.component";
import { SearchBarComponent } from "./components/navbarComponents/search-bar/search-bar.component";
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapTrash, bootstrapFacebook, bootstrapTwitter, bootstrapTiktok, bootstrapInstagram, bootstrapCart, bootstrapPersonCircle, bootstrapStar, bootstrapArrowReturnLeft, bootstrapHeartFill, bootstrapArrowBarRight } from '@ng-icons/bootstrap-icons';
import { CoreModule } from "../core/core.module";
import { DropdownMenuComponent } from './components/navbarComponents/dropdown-menu/dropdown-menu.component';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  declarations: [
    NavBarComponent,
    InputComponent,
    BtnComponent,
    FooterComponent,
    SelectComponent,
    InputPasswordComponent,
    ErrorMessageComponent,
    SearchBarComponent,
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
      bootstrapHeartFill,
      bootstrapArrowBarRight
    }),
    CoreModule,
    NgbDropdownToggle,
    NgbDropdown,
    NgbDropdownMenu,
    NgbDropdownItem
  ],
  exports: [
    NavBarComponent,
    InputComponent,
    BtnComponent,
    FooterComponent,
    SelectComponent,
    InputPasswordComponent,

  ]
})
export class SharedModule { }
