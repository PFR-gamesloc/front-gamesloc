import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Customer } from "../../shared/entities/customer";
import { CustomerAddress } from 'src/app/shared/entities/customerAddress';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {  

  private baseUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public getCustomer(userId : number): Observable<Customer> {
    const url = `${this.baseUrl}/customer/${userId}`
    return this.httpClient.get<Customer>(url);
  }

  public getAddressCustomer(userId : number) : Observable<CustomerAddress> {
    const url = `${this.baseUrl}/customer/${userId}`
    return this.httpClient.get<CustomerAddress>(url);
  }

  public getCustomersAdmin() : Observable<Customer[]> {
    const url = `${this.baseUrl}/admin/customer/all`
    return this.httpClient.get<Customer[]>(url);
  }
}
