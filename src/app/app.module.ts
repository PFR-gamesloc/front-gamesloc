import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CommentaryFormComponent } from './modules/product/components/commentary-form/commentary-form.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
