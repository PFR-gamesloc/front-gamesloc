import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

const routes: Routes = [
// {
//   path: '',
//   component: NavBarComponent
// }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
