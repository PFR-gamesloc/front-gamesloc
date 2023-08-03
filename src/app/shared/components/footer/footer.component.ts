import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  showFooter: boolean = true; 

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        (val.url == '/admin' || val.url == '/admin/located-games' || val.url == '/admin/games' || val.url == '/admin/users') ? this.showFooter = false : this.showFooter = true;
      }
    })
    
  }

}
