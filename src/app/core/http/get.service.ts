import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class GetService {

  private baseurl: string = "http://localhost:8080/"
  constructor(private http: HttpClient) { }

  getData<T>(route: string): Observable<T> {
    return this.http.get<any>(this.baseurl + route);
  }
}
