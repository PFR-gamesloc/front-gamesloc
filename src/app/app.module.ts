import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { BtnComponentComponent } from './shared/components/btn-component/btn-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BtnComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
