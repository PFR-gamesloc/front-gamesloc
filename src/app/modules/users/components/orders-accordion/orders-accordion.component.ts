import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OrdersService } from 'src/app/core/http/orders.service';
import { Order } from 'src/app/shared/entities/order';

@Component({
  selector: 'app-orders-accordion',
  templateUrl: './orders-accordion.component.html',
  styleUrls: ['./orders-accordion.component.scss'], 
  providers: [DatePipe]
})
export class OrdersAccordionComponent {
  orders$: Observable<Order[]> | undefined; 

  constructor(
    private ordersService: OrdersService, 
    private route: ActivatedRoute, 
    private datePipe: DatePipe ) {
     }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params?.get('id');
      this.getSelectedOrdersByUserId(Number(id));
    })
  }
  
  private getSelectedOrdersByUserId(id : number) : void {
    this.orders$ = this.ordersService.getOrders(id); 
  }
}
