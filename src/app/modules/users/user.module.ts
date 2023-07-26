import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from "./user-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";


@NgModule({
  declarations: [
    DashboardPageComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule
  ]
})
export class UserModule { }
