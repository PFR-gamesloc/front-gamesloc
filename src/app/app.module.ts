import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import {InputComponent} from "./shared/components/input/input.component";
import {BtnComponent} from "./shared/components/btn/btn.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InputComponent,
    BtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
