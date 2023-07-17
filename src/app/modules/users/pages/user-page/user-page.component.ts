import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/entities/user';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  user: User | undefined; 

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getCustomer().subscribe({
      next: value => {this.user = value}
    })
  }
}
