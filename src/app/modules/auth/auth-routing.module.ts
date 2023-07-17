import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnexionPageComponent} from "./pages/connexion-page/connexion-page.component";
import {InscriptionPageComponent} from "./pages/inscription-page/inscription-page.component";

const routes: Routes = [
  { path: '',
    children:[
      {path: 'login', component: ConnexionPageComponent},
      {path: 'signin', component: InscriptionPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
