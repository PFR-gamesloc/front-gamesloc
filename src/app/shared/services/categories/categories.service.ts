import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Type} from "../../entities/type";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private url: string = "/assets/data/categories.json";

  constructor(private httpClient: HttpClient) {
  }

  getCategories(): Observable<Type[]> {
    return this.httpClient.get<Type[]>(this.url);
  }
}
