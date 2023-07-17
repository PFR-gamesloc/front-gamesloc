import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import {ConnexionPageComponent} from "./pages/connexion-page/connexion-page.component";
import {InscriptionPageComponent} from "./pages/inscription-page/inscription-page.component";
import {SharedModule} from "../../shared/shared.module";
import {FormGroupDirective, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ConnexionPageComponent,
    InscriptionPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
