import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OrdersService } from 'src/app/core/http/orders.service';
import { Order } from 'src/app/shared/entities/order';
import {GetService} from "../../../../core/http/get.service";

@Component({
  selector: 'app-orders-accordion',
  templateUrl: './orders-accordion.component.html',
  styleUrls: ['./orders-accordion.component.scss'],
  providers: [DatePipe]
})
export class OrdersAccordionComponent {
  orders: Order[] ;

  constructor(private getService:GetService) {
    this.orders = [];
     }

  ngOnInit(): void {
    this.getService.getData<Order[]>("customer/me/orders").subscribe({
      next: res =>this.orders = res
    })
  }
}
