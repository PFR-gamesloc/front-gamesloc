import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {AuthServiceService} from "../auth/auth-service.service";
import {inject, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class isSignedInGuard {
  constructor(private router: Router, private authService: AuthServiceService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.authService.isAuth.value){
      this.router.navigate(["/"]);
      return false;
    }
    return true;
  }
}

