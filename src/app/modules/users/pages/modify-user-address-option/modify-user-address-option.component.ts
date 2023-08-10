import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/core/http/customer.service';
import { CustomerAddress } from 'src/app/shared/entities/customerAddress';
import {GetService} from "../../../../core/http/get.service";

@Component({
  selector: 'app-modify-user-address-option',
  templateUrl: './modify-user-address-option.component.html',
  styleUrls: ['./modify-user-address-option.component.scss']
})
export class ModifyUserAddressOptionComponent {
  public customer!: CustomerAddress;
  public customerForm!: FormGroup;

  private isFormSubmitter!: boolean;

  constructor(
    private getService:GetService
  ) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      numberAddress: new FormControl(''),
      complementaryNumber: new FormControl(''),
      streetName: new FormControl(''),
      complementaryAddress: new FormControl(''),
      postalCode: new FormControl(''),
      cityName: new FormControl('')
    })

    this.getService.getData<CustomerAddress>("customer/me").subscribe({
      next: (res:CustomerAddress) => this.displayCustomer(res)
    });

  }

  public displayCustomer(customer: CustomerAddress): void {
    this.customer = customer;

    this.customerForm.patchValue({
      numberAddress: this.customer.address.numberAddress,
      complementaryNumber: this.customer.address.complementaryNumber,
      streetName: this.customer.address.streetName,
      complementaryAddress: this.customer.address.complementaryAddress,
      postalCode: this.customer.address.city.postalCode,
      cityName: this.customer.address.city.cityName,
    });
  }

  public saveCustomer() : void {
    this.isFormSubmitter = true;
    this.customerForm.updateValueAndValidity({
      onlySelf: true,
      emitEvent: true
    })
  }
}
