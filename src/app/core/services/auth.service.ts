import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserCredentials} from "../../modules/auth/entities/user-credentials";
import {BehaviorSubject, Observable} from "rxjs";
import {Token} from "../../modules/auth/entities/token";
import {Router} from "@angular/router";
import {InscriptionForm} from "../../shared/entities/inscriptionForm";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl: string = "http://localhost:8080/";

  public isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  login(userCredentials: UserCredentials):Observable<Token> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    this.isAuth.next(true);
    return this.httpClient.post<Token>(this.baseurl + "auth/authenticate", userCredentials, httpOptions);

  }


  private isAuthenticated(): boolean {
    return !((sessionStorage.getItem("token") === null) && (localStorage.getItem("token") === null));
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.isAuth.next(false);
    this.router.navigate(["/"]);
  }

  createUser(userInfo:InscriptionForm){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    this.httpClient.post(this.baseurl + "auth/register",userInfo,httpOptions).subscribe(()=>console.log("la"));
  }


}


