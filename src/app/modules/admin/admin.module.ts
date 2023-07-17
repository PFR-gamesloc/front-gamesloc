import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardPageComponent } from './pages/admin-dashbord-page/admin-dashboard-page.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    AdminDashboardPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule
  ],
})
export class AdminModule { }
