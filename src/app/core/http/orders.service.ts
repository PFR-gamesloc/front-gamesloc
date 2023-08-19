import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminOrder } from 'src/app/shared/entities/admin-order';
import { Order } from 'src/app/shared/entities/order';
import { GetService } from './get.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private baseUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient, private getService:GetService) { }

  public getOrders(userId: number): Observable<Order[]> {
    const url = `${this.baseUrl}/customer/${userId}/orders`;
    return this.getService.getData<Order[]>(url)
  }

  public getAdminOrders(): Observable<AdminOrder[]> {
    const url = `${this.baseUrl}/admin/order/all`;
    return this.getService.getData<AdminOrder[]>(url);
  }
  public validateCart(orderDTO: any): Observable<any> {
    const url = `${this.baseUrl}/customers/me/create-order`; // URL Back Order
    return this.httpClient.post(url, orderDTO);
  }
}
