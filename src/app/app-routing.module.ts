import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { CardItemComponent } from './shared/components/card-item/card-item.component';
import { HomeTestComponent } from './shared/components/home-test/home-test.component';

const routes: Routes = [
{
  path: '',
  component: NavBarComponent
},
{
  path:'card',
  component: CardItemComponent
},
{
  path:'hometest',
  component: HomeTestComponent
},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
