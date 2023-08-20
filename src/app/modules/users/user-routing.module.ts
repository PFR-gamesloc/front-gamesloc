import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { ModifyUserOptionComponent } from './pages/modify-user-option/modify-user-option.component';
import { ModifyUserAddressOptionComponent } from './pages/modify-user-address-option/modify-user-address-option.component';


const routes: Routes = [
  {
    path: 'me',
    component: DashboardPageComponent,
  },
  {
    path: 'me/edit',
    component: ModifyUserOptionComponent,
  },
  {
    path: ':me/edit/address',
    component: ModifyUserAddressOptionComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
