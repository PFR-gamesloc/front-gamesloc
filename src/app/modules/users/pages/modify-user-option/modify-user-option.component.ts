import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/core/http/customer.service';
import { UsersService } from 'src/app/core/http/users.service';
import { Customer } from 'src/app/shared/entities/customer';

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
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      lastname: new FormControl(''),
      firstname: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    })

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"));

      this.getSelectedCustomer(id); 
    })
  }

  public getSelectedCustomer(id: number) : void {
    this.customerService.getCustomer(id).subscribe({
      next: (customer: Customer) => this.displayCustomer(customer)
    })
  }

  public displayCustomer(customer: Customer): void {
    this.customer = customer;

    this.customerForm.patchValue({
      lastname: this.customer.lastName,
      firstname: this.customer.firstName,
      phoneNumber: this.customer.phoneNumber,
      email: this.customer.email,
      password: this.customer.password,
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
