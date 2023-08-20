import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Customer} from "../../shared/entities/customer";
import {GetService} from "./get.service";

@Injectable({
  providedIn: 'root'
})
export class AdminCustomerService {

  constructor(private getService: GetService) { }

  public getCustomersAdmin() : Observable<Customer[]> {
    const url = `/admin/customer/all`;
    return this.getService.getData<Customer[]>(url);
  }
}
