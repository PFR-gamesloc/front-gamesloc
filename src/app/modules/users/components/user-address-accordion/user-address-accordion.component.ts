import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/core/http/customer.service';
import { CustomerAddress } from 'src/app/shared/entities/customerAddress';

@Component({
  selector: 'app-user-address-accordion',
  templateUrl: './user-address-accordion.component.html',
  styleUrls: ['./user-address-accordion.component.scss']
})
export class UserAddressAccordionComponent {  
  customerAddress: CustomerAddress | undefined;

  constructor(
    private customerAddressService: CustomerService,
    private route: ActivatedRoute ) { 
    }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params?.get('id'); 
      this.getAddressByUserId(Number(id)); 
    })
  }

  private getAddressByUserId(id: number) : void {
    this.customerAddressService.getAddressCustomer(id).subscribe({
      next: value => { 
        this.customerAddress = value; 
      }
    })
  }
}
