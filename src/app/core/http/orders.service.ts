import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/entities/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private url: string = "/assets/datas/orders.json"; 

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.url)
  }
}
