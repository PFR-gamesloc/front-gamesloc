import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  textBtn: string = 'Connexion';
  classBtn: string = 'btn btn-log btn-dekstop display-connexion';
  classSchBarNav: string = 'input sh-nav';
  placeholderSchBarNav: string = 'jeux';
  showSearchBar: boolean = true;
  showHeader: boolean = true; 
  currentWindowWidth: number;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const adminRoutePattern = /^\/admin(\/|$)/; 
        if(adminRoutePattern.test(val.url)) {
          this.showHeader = false; 
        } else {
          this.showHeader = true; 
        }
      }
    })
    this.currentWindowWidth = window.innerWidth;

  }
  @HostListener('window:resize')
  onResize() {
    this!.currentWindowWidth = window.innerWidth
  }


}
