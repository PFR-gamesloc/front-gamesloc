import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/entities/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private url: string = "http://localhost:8080/customer/1/orders"; 

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.url)
  }
}
