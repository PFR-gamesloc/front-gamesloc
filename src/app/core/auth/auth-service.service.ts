import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {UserCredentials} from "../../modules/auth/entities/user-credentials";
import {BehaviorSubject, map, Observable, tap} from "rxjs";
import {Token} from "../../modules/auth/entities/token";
import {Router} from "@angular/router";
import {isCI} from "@angular/cli/src/utilities/environment-options";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

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
    if ((sessionStorage.getItem("token") === null) && (localStorage.getItem("token") === null)) {
      return false;
    }
    else {
      return true;
    }
  }

  logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("subject");
    sessionStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("subject");
    localStorage.removeItem("role");
    this.isAuth.next(false);
    this.router.navigate(["/"]);
  }


}


