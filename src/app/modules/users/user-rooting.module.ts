import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductPageComponent} from "./pages/product-page/product-page.component";

const routes: Routes = [
  {
    path: 'products',
    component: ProductPageComponent,
    children: [
      {path: ':productId', component:ProductPageComponent},
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRootingModule { }
