import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthServiceService} from "../../../../core/auth/auth-service.service";
import {UserCredentials} from "../../entities/user-credentials";
import {Token} from "../../entities/token";
import jwt_decode from 'jwt-decode';
import {DecodedToken} from "../../entities/decoded-token";
import {Router} from "@angular/router";

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

  showErrorMessage:boolean = false ;

  constructor(private authService:AuthServiceService,
              private router:Router) {}

  signin() {
    let userCredentials:UserCredentials = {
      username: this.formGroup.get('mail')?.value,
      password: this.formGroup.get('password')?.value
    };

    this.authService.login(userCredentials).subscribe({
      next: (value:Token) => this.setTokenInSession(value),
      error: () => this.showErrorMessage = true
    })
    };


  setTokenInSession(res:Token) {
    this.authService.isAuth.next(true);
    const remember = this.formGroup.get('rememberMe')?.value;
    const decodedToken: DecodedToken = jwt_decode(res.token);
    if (remember === true)
    {
      localStorage.setItem("token", res.token);
      localStorage.setItem("subject", decodedToken.sub)
      localStorage.setItem("role", decodedToken.role)
    }
    else
    {
      sessionStorage.setItem("token",res.token);
      sessionStorage.setItem("subject", decodedToken.sub)
      sessionStorage.setItem("role", decodedToken.role)
    }

    this.router.navigate(['/']).then(() => window.location.reload()); 

  }
}
