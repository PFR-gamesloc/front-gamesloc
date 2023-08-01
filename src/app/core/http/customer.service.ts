import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Customer } from "../../shared/entities/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService { 

  private baseUrl: string = "http://localhost:8080/customer";

  constructor(private httpClient: HttpClient) { }

  public getCustomer(userId : number): Observable<Customer> {
    const url = `${this.baseUrl}/${userId}`
    return this.httpClient.get<Customer>(url);
  }
}
