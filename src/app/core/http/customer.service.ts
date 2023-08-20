import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Customer } from "../../shared/entities/customer";
import { CustomerAddress } from 'src/app/shared/entities/customerAddress';
import { AddGameToCustomerFavDTO } from 'src/app/shared/entities/AddGameToCustomerFavDTO';
import { CustomerEdit } from 'src/app/shared/entities/customerEdit';
import { CustomerAddressEdit } from 'src/app/shared/entities/customerAddressEdit';
import {CommentToPost} from "../../modules/product/entities/CommentToPost";
import {GetService} from "./get.service";
import {Order} from "../../shared/entities/order";
import {City} from "../../shared/entities/city";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient, private getService:GetService) { }


  public addToFavorites(game: AddGameToCustomerFavDTO): Observable<Customer> {
    const url = `${this.baseUrl}/customer/me/favs/add`;
    return this.httpClient.post<Customer>(url, game);
  }

  public removeToFavorites(game: AddGameToCustomerFavDTO): Observable<Customer> {
    const url = `${this.baseUrl}/customer/me/favs/remove`;
    return this.httpClient.post<Customer>(url, game);
  }

  public modifyCustomer(customerEdit: CustomerEdit) : Observable<CustomerEdit> {
    const url = `${this.baseUrl}/customer/edit`;
    return this.httpClient.put<CustomerEdit>(url, customerEdit);
  }

  public modifyAddressCustomer(customerAddressEdit: CustomerAddressEdit) : Observable<CustomerAddressEdit> {
    const url = `${this.baseUrl}/customer/edit/address`;
    return this.httpClient.put<CustomerAddressEdit>(url, customerAddressEdit);
  }
  public postAComment(commentToPost:CommentToPost):Observable<boolean>{
    return this.httpClient.post<boolean>(this.baseUrl + "/customer/comment/add", commentToPost);
  }
  public getOrders():Observable<Order[]>{
    return this.getService.getData<Order[]>('customer/me/orders');
  }

  public getCities(value: string):Observable<City[]>{
    return this.getService.getData<City[]>("customer/cities/"+ value);
  }

}
