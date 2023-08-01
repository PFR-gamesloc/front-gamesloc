import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserAddressService } from 'src/app/core/http/user-address.service';
import { Address } from 'src/app/shared/entities/address';

@Component({
  selector: 'app-user-address-accordion',
  templateUrl: './user-address-accordion.component.html',
  styleUrls: ['./user-address-accordion.component.scss']
})
export class UserAddressAccordionComponent {
  userAddress: Address | undefined;

  constructor(
    private userAddressService: UserAddressService,
    private route: ActivatedRoute ) { 
    }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params?.get('id'); 
      this.getAddressByUserId(Number(id)); 
    })
  }

  private getAddressByUserId(id: number) : void {
    this.userAddressService.getUserAddress(id).subscribe({
      next: value => {
        this.userAddress = value
      }
    })
  }
}
