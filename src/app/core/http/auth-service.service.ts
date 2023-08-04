import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserCredentials} from "../../modules/auth/entities/user-credentials";
import {map, Observable, tap} from "rxjs";
import {Token} from "../../modules/auth/entities/token";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseurl: string = "http://localhost:8080/";
  constructor(private httpClient: HttpClient) {
  }
  login(userCredentials: UserCredentials):Observable<Token> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })};
     return this.httpClient.post<Token>(this.baseurl + "auth/authenticate", userCredentials, httpOptions);
  }
}

