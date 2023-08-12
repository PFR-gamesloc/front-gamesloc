import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/core/http/customer.service';
import { UsersService } from 'src/app/core/http/users.service';
import { Customer } from 'src/app/shared/entities/customer';
import { GetService } from "../../../../core/http/get.service";
import { CustomerEdit } from 'src/app/shared/entities/customerEdit';
import { ToastrService} from 'ngx-toastr'; 

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
      lastname: new FormControl(''),
      firstname: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl('')
    })
    this.getService.getData<Customer>("customer/me").subscribe({
      next: res => this.displayCustomer(res)
    });
  }

  public displayCustomer(customer: Customer): void {
    this.customer = customer;

    this.customerForm.patchValue({
      lastname: this.customer.lastName,
      firstname: this.customer.firstName,
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
        next: (response) => {
          this.saveCompleted(response); 
        }, 
        error: (err) => {
          this.toastr.error("Votre modification n'a pas été pris en compte ", err.message); 
        }
      })
    }
  }

  public saveCompleted(response: CustomerEdit) : void {
    this.customerForm.reset(); 
    this.router.navigate(['/user', 'me'])
    this.toastr.success("Votre modification a bien été pris en compte"); 
  }

}
