import { Component } from '@angular/core';
import { User } from '../../../../shared/entities/user';
import { UserService } from 'src/app/core/http/user.service';

@Component({
  selector: 'app-user-accordion',
  templateUrl: './user-accordion.component.html',
  styleUrls: ['./user-accordion.component.scss']
})
export class UserAccordionComponent {
  user: User | undefined; 

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getCustomer().subscribe({
      next: value => {this.user = value}
    })
  }
}
