import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthServiceService} from "../../../../core/http/auth-service.service";
import {UserCredentials} from "../../entities/user-credentials";
import {Token} from "../../entities/token";
import jwt_decode from 'jwt-decode';
import {DecodedToken} from "../../entities/decoded-token";

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss']
})
export class ConnexionPageComponent {

  public formGroup:FormGroup = new FormGroup({
    mail: new FormControl(''),
    password: new FormControl(''),
    rememberMe: new FormControl('')
  });

  constructor(private authService:AuthServiceService) {}

  signin() {

    let userCredentials:UserCredentials = {
      username: this.formGroup.get('mail')?.value,
      password: this.formGroup.get('password')?.value
    };

    this.authService.login(userCredentials).subscribe({
      next: (res:Token) => this.setTokenInSession(res)
    });

  }

  setTokenInSession(res:Token) {
    const remember = this.formGroup.get('rememberMe')?.value;
    const decodedToken: DecodedToken = jwt_decode(res.token);
    if (remember === true){
      localStorage.setItem("token", res.token);
    }
    else {
      sessionStorage.setItem("token",res.token);
    }
  }
}
