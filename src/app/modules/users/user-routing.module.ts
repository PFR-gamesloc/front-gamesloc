import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { ModifyUserOptionComponent } from './pages/modify-user-option/modify-user-option.component';
import { NumberIdGuardService } from 'src/app/core/guard/number-id.guard';
import { ModifyUserAddressOptionComponent } from './pages/modify-user-address-option/modify-user-address-option.component';

const routes: Routes = [
  {
    path: ':id',
    component: DashboardPageComponent,
    canActivate: [NumberIdGuardService]
  },
  {
    path: ':id/edit',
    component: ModifyUserOptionComponent,
    canActivate: [NumberIdGuardService]
  }, 
  {
    path: ':id/edit/address', 
    component: ModifyUserAddressOptionComponent, 
    canActivate: [NumberIdGuardService]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
