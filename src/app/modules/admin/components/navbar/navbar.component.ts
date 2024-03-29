import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from '../../entities/nav-data';
import { SideNavToggle } from '../../entities/SideNavToggle';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter(); 

  collapsed = false; 
  screenWidth = 0;  
  navData = navbarData;  

  toggleCollapse() : void {
    this.collapsed = !this.collapsed; 
    this.onToggleSideNav.emit({
      collapsed: this.collapsed, 
      screenWidth: this.screenWidth
    })
  }

  closeSidenav() : void {
    this.collapsed = false; 
    this.onToggleSideNav.emit({
      collapsed: this.collapsed, 
      screenWidth: this.screenWidth
    })
  }
}