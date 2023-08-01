import { Component } from '@angular/core';
import { Customer } from '../../../../shared/entities/customer';
import { CustomerService } from 'src/app/core/http/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-accordion',
  templateUrl: './user-accordion.component.html',
  styleUrls: ['./user-accordion.component.scss']
})
export class UserAccordionComponent {
  customer: Customer | undefined;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params?.get('id');
      this.getSelectedUser(Number(id));
    })
  }

  private getSelectedUser(id: number): void {
    this.customerService.getCustomer(id).subscribe({
      next: value => {
        this.customer = value
      }
    })
  }
}
