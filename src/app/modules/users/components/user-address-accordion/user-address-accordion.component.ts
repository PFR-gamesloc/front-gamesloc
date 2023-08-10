import { Component } from '@angular/core';
import { CustomerAddress } from 'src/app/shared/entities/customerAddress';
import {GetService} from "../../../../core/http/get.service";


@Component({
  selector: 'app-user-address-accordion',
  templateUrl: './user-address-accordion.component.html',
  styleUrls: ['./user-address-accordion.component.scss']
})
export class UserAddressAccordionComponent {
  customerAddress: CustomerAddress | undefined;

  constructor(private getService:GetService) {
    }

  ngOnInit() {
    this.getService.getData<CustomerAddress>("customer/me").subscribe({
      next: (res:CustomerAddress) => this.customerAddress=res
    });
  }
}
