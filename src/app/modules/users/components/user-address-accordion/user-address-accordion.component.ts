import { Component } from '@angular/core';
import { UserAddressService } from 'src/app/core/http/user-address.service';
import { Address } from 'src/app/shared/entities/address';

@Component({
  selector: 'app-user-address-accordion',
  templateUrl: './user-address-accordion.component.html',
  styleUrls: ['./user-address-accordion.component.scss']
})
export class UserAddressAccordionComponent {
  userAddress: Address | undefined;

  constructor(private userAddressService: UserAddressService) { }

  ngOnInit() {
    this.userAddressService.getUserAddress().subscribe({
      next: value => { this.userAddress = value }
    })
  }
}
