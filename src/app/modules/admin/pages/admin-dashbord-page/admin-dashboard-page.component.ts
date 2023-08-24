import { Component } from '@angular/core';
import { SideNavToggle } from '../../entities/SideNavToggle';

@Component({
  selector: 'app-admin-dashboard-page',
  templateUrl: './admin-dashboard-page.component.html',
  styleUrls: ['./admin-dashboard-page.component.scss']
})
export class AdminDashboardPageComponent {

  isSideNavCollapsed = false; 
  screenWith = 0; 

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWith = data.screenWidth; 
    this.isSideNavCollapsed = data.collapsed; 
  }
}
