import { NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {isSignedInGuard} from "./core/guard/is-signed-in.guard";
import {isAdminGuard} from "./core/guard/is-admin.guard";

const routes: Routes = [
  {
    path:'',
    pathMatch: "full",
    loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate:[isAdminGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'product',
    loadChildren : () => import('./modules/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/users/user.module').then(m => m.UserModule),
    canActivate: [isSignedInGuard]
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
