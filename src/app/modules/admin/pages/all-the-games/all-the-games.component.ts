import { Component } from '@angular/core';
import { SideNavToggle } from '../../entities/SideNavToggle';

@Component({
  selector: 'app-all-the-games',
  templateUrl: './all-the-games.component.html',
  styleUrls: ['./all-the-games.component.scss']
})
export class AllTheGamesComponent {
  
  isSideNavCollapsed = false; 
  screenWith = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWith = data.screenWidth; 
    this.isSideNavCollapsed = data.collapsed; 
  }
}
