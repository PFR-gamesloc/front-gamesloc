import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/core/http/customer.service';
import { CustomerAddress } from 'src/app/shared/entities/customerAddress';
import { GetService } from "../../../../core/http/get.service";
import { CustomerAddressEdit } from 'src/app/shared/entities/customerAddressEdit';
import { ToastrService } from 'ngx-toastr';
import { regex } from 'src/environments/regex';

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
    private getService: GetService,
    private customerService: CustomerService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      numberAddress: new FormControl('', [Validators.required, Validators.pattern(regex.streetNumberRegex)]),
      complementaryNumber: new FormControl('', [Validators.pattern(regex.complementaryNumberRegex)]),
      streetName: new FormControl('', [Validators.required, Validators.pattern(regex.streetNameRegex)]),
      complementaryAddress: new FormControl(''),
      postalCode: new FormControl('', [Validators.required, Validators.pattern(regex.postalCodeRegex)]),
      cityName: new FormControl('', [Validators.required, Validators.pattern(regex.cityNameRegex)])
    })

    this.getService.getData<CustomerAddress>("/customer/me").subscribe({
      next: (res: CustomerAddress) => this.displayCustomer(res)
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

  public saveCustomer(): void {
    this.isFormSubmitter = true;

    if (this.customerForm.valid) {
      const modifyCustomer: CustomerAddressEdit = {
        ...this.customerForm.value
      }



      this.customerService.modifyAddressCustomer(modifyCustomer).subscribe({
        next: () => {
          this.saveCompleted();
        },
        error: (err) => {
          this.toastr.error("Votre modification n'a pas été pris en compte ", err.message);
        }
      })
    }
  }

  public saveCompleted(): void {
    this.customerForm.reset();
    this.toastr.success("Votre modification a bien été pris en compte");
    this.router.navigate(['/user', 'me'])
  }
}
