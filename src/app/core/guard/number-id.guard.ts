import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NumberIdGuardService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const id = Number(route.params["id"]); 

    if(isNaN(id) || id <= 0) {
      this.router.navigate(['/auth/login']);
      return false; 
    }

    return true; 
  }
}
