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
      if (val instanceof NavigationEnd) {

        const adminRoutePattern = /^\/admin(\/|$)/; 

        if(adminRoutePattern.test(val.url)) {
          this.showFooter = false; 
        } else {
          this.showFooter = true; 
        }
      }
    })

  }

}
