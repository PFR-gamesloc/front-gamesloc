import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../shared/entities/customer";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = "/assets/datas/users.json";

  constructor(private httpClient: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.url);
  }
}
