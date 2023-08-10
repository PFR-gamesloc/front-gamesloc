import { Component } from '@angular/core';
import {AuthServiceService} from "../../../core/auth/auth-service.service";

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent {
  showDropdown:boolean;

  constructor(private authService: AuthServiceService) {
    this.showDropdown = false;
  }

  logout(){
    this.authService.logout();
  }
}
