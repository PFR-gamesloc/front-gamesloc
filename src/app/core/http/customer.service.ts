import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Customer } from "../../shared/entities/customer";
import { CustomerAddress } from 'src/app/shared/entities/customerAddress';
import { CustomerEdit } from 'src/app/shared/entities/customerEdit';
import { CustomerAddressEdit } from 'src/app/shared/entities/customerAddressEdit';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {  

  private baseUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public getCustomer(userId : number): Observable<Customer> {
    const url = `${this.baseUrl}/customer/${userId}`; 
    return this.httpClient.get<Customer>(url);
  }

  public getAddressCustomer(userId : number) : Observable<CustomerAddress> {
    const url = `${this.baseUrl}/customer/${userId}`;
    return this.httpClient.get<CustomerAddress>(url);
  }

  public getCustomersAdmin() : Observable<Customer[]> {
    const url = `${this.baseUrl}/admin/customer/all`;
    return this.httpClient.get<Customer[]>(url);
  }

  public modifyCustomer(customerEdit: CustomerEdit) : Observable<CustomerEdit> {
    customerEdit = {
      ...customerEdit
    }; 

    const url = `${this.baseUrl}/customer/edit`;
    return this.httpClient.put<CustomerEdit>(url, customerEdit);
  }

  public modifyAddressCustomer(customerAddressEdit: CustomerAddressEdit) : Observable<CustomerAddressEdit> {
    customerAddressEdit = {
      ...customerAddressEdit
    }; 

    const url = `${this.baseUrl}/customer/edit/address`;
    return this.httpClient.put<CustomerAddressEdit>(url, customerAddressEdit);
  }
}
