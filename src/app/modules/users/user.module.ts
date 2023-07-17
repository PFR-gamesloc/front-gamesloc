import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from "./user-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {HomePageComponent} from "../home/pages/home-page/home-page.component";



@NgModule({
  declarations: [
    DashboardPageComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
