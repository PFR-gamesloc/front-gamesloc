import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/entities/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private baseUrl: string = "http://localhost:8080/customer"; 

  constructor(private httpClient: HttpClient) { }

  public getOrders(userId : number): Observable<Order[]> {
    const url = `${this.baseUrl}/${userId}/orders`; 
    return this.httpClient.get<Order[]>(url)
  }
}
