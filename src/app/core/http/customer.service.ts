import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Customer } from "../../shared/entities/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url: string = "http://localhost:8080/customer/1";

  constructor(private httpClient: HttpClient) { }

  getCustomer(): Observable<Customer> {
    return this.httpClient.get<Customer>(this.url);
  }
}
