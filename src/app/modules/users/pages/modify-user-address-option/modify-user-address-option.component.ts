import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/core/http/customer.service';
import { CustomerAddress } from 'src/app/shared/entities/customerAddress';

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
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private customerService: CustomerService
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

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"));

      this.getSelectedCustomer(id); 
    })
  }

  public getSelectedCustomer(id: number) : void {
    this.customerService.getAddressCustomer(id).subscribe({
      next: (customer: CustomerAddress) => this.displayCustomer(customer)
    })
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
