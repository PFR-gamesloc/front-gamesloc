import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { CardItemComponent } from './shared/components/card-item/card-item.component';
import { HomeTestComponent } from './shared/components/home-test/home-test.component';

const routes: Routes = [
{
  path:'card',
  component: CardItemComponent
},
{
  path:'',
  component: HomeTestComponent
},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
