import { Component } from '@angular/core';
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent {
  showDropdown:boolean;

  constructor(private authService: AuthService) {
    this.showDropdown = false;
  }

  logout(){
    this.authService.logout();
  }
}
