import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Type} from "../../entities/type";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url: string = "/assets/data/category.json";

  constructor(private httpClient: HttpClient) {
  }

  getCategory(): Observable<Type> {
    return this.httpClient.get<Type>(this.url);
  }
}
