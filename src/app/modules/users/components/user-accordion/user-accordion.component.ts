import { Component } from '@angular/core';
import { Customer } from '../../../../shared/entities/customer';
import { CustomerService } from 'src/app/core/http/customer.service';

@Component({
  selector: 'app-user-accordion',
  templateUrl: './user-accordion.component.html',
  styleUrls: ['./user-accordion.component.scss']
})
export class UserAccordionComponent {
  customer: Customer | undefined; 

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomer().subscribe({
      next: value => {this.customer = value}
    })
  }
}
