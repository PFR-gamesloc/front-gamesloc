import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from 'src/app/core/http/orders.service';
import { Order } from 'src/app/shared/entities/order';

@Component({
  selector: 'app-orders-accordion',
  templateUrl: './orders-accordion.component.html',
  styleUrls: ['./orders-accordion.component.scss']
})
export class OrdersAccordionComponent {
  orders$: Observable<Order[]> | undefined; 

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.orders$ = this.ordersService.getOrders(); 
    console.log(this.orders$);
    
  }
  
}
