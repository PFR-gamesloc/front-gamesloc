import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {environmentProd} from "../../../environment.prod";
import {env} from "../../../env";
@Injectable({
  providedIn: 'root'
})
export class GetService {

  baseUrl!:string;
  constructor(private http: HttpClient) {
    if(environmentProd.production){
      this.baseUrl = environmentProd.baseUrl;
    }
    else {
      this.baseUrl = env.baseUrl;
    }
  }

  getData<T>(route: string): Observable<T> {
    return this.http.get<any>(this.baseUrl + route);
  }
}
