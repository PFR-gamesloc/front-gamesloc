import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {environment} from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class GetService {

  baseUrl!:string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  getData<T>(route: string): Observable<T> {
    return this.http.get<any>(this.baseUrl + route);
  }
}
