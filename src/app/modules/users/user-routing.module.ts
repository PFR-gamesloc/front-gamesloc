import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";

const routes: Routes = [
  {
    path: ':id', 
    component: DashboardPageComponent
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
