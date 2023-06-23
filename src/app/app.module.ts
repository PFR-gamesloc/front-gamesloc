import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { BtnComponentComponent } from './shared/components/btn/btn.component';
import { AppRoutingModule } from './app-routing.module';
import { CardItemComponent } from './shared/components/card-item/card-item.component';
import { HomeTestComponent } from './shared/components/home-test/home-test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BtnComponentComponent,
    CardItemComponent,
    HomeTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
