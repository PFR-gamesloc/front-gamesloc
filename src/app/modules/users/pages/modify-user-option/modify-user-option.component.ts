import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { regex } from "../../../../../environments/regex"
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/core/http/customer.service';
import { Customer } from 'src/app/shared/entities/customer';
import { GetService } from "../../../../core/http/get.service";
import { CustomerEdit } from 'src/app/shared/entities/customerEdit';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modify-user-option',
  templateUrl: './modify-user-option.component.html',
  styleUrls: ['./modify-user-option.component.scss']
})
export class ModifyUserOptionComponent implements OnInit {

  public customer!: Customer;
  public customerForm!: FormGroup;

  private isFormSubmitter!: boolean;

  constructor(
    private router: Router,
    private getService: GetService,
    private customerService: CustomerService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      lastName: new FormControl('', [Validators.required, Validators.pattern(regex.nameRegex)]),
      firstName: new FormControl('', [Validators.required, Validators.pattern(regex.nameRegex)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(regex.phoneNumberRegex)]),
      email: new FormControl('', [Validators.required, Validators.pattern(regex.emailRegex)]),
    })
    this.getService.getData<Customer>("/customer/me").subscribe({
      next: (res:Customer) => this.displayCustomer(res)
    });
  }

  public displayCustomer(customer: Customer): void {
    this.customer = customer;

    this.customerForm.patchValue({
      lastName: this.customer.lastName,
      firstName: this.customer.firstName,
      phoneNumber: this.customer.phoneNumber,
      email: this.customer.email
    });
  }

  public saveCustomer(): void {
    this.isFormSubmitter = true;

    if (this.customerForm.valid) {
      const modifyCustomer: CustomerEdit = {
        ...this.customerForm.value
      }

      this.customerService.modifyCustomer(modifyCustomer).subscribe({
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
    this.router.navigate(['/user', 'me'])
    this.toastr.success("Votre modification a bien été pris en compte");
  }

}
