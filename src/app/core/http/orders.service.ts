import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminOrder } from 'src/app/shared/entities/admin-order';
import { Order } from 'src/app/shared/entities/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private baseUrl: string = "http://localhost:8080"; 

  constructor(private httpClient: HttpClient) { }

  public getOrders(userId : number): Observable<Order[]> {
    const url = `${this.baseUrl}/customer/${userId}/orders`; 
    return this.httpClient.get<Order[]>(url)
  }

  public getAdminOrders() : Observable<AdminOrder[]> {
    const url = `${this.baseUrl}/admin/order/all`; 
    return this.httpClient.get<AdminOrder[]>(url); 
  }
}
