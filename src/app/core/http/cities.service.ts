import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {City} from "../../shared/entities/city";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private url = "/assets/datas/cities.json"
  constructor(private httpClient: HttpClient) { }

  getCities():Observable<City[]>{
    return this.httpClient.get<City[]>(this.url);
  }
}
