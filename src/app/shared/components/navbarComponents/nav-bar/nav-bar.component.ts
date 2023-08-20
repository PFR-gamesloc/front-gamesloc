import {Component, HostListener} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent{
  textBtn: string = 'Connexion';
  classBtn: string = 'btn btn-log btn-dekstop display-connexion';
  showSearchBar: boolean = true;
  showHeader: boolean = true;
  currentWindowWidth: number;
  isConnected: boolean = false;
  constructor(private router: Router, private authService:AuthService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        (val.url.startsWith("/services")) ? this.showSearchBar = false : this.showSearchBar = true;
        (val.url.startsWith("/admin")) ? this.showHeader = false : this.showHeader = true;

      }
    })
    this.currentWindowWidth = window.innerWidth;
    this.authService.isAuth.subscribe(value => this.isConnected = value);

  }
  @HostListener('window:resize')
  onResize() {
    this!.currentWindowWidth = window.innerWidth
  }
}
