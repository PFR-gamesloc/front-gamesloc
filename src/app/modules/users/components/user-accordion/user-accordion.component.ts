import { Component } from '@angular/core';
import { Customer } from '../../../../shared/entities/customer';
import {GetService} from "../../../../core/http/get.service";

@Component({
  selector: 'app-user-accordion',
  templateUrl: './user-accordion.component.html',
  styleUrls: ['./user-accordion.component.scss']
})
export class UserAccordionComponent {
  customer: Customer | undefined;

  constructor(private getService:GetService) { }

  ngOnInit(){
    this.getService.getData<Customer>("customer/me").subscribe({
      next: res => this.customer=res
    });
  }
}
