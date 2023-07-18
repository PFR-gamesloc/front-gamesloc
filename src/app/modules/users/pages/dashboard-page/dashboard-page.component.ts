import { Component } from '@angular/core';
import { UserService } from 'src/app/core/http/user.service';
import { User } from 'src/app/shared/entities/user';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  panelOpenState = false; 

  user: User | undefined; 

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getCustomer().subscribe({
      next: value => {this.user = value}
    })
  }
}
