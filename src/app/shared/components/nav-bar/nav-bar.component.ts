import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        (val.url == '/connexion' || val.url == '/inscription') ? this.showSearchBar = false : this.showSearchBar = true; 
      }
    })
  }
}