import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthServiceService} from "../auth/auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class isAdminGuard {
  constructor(private router: Router, private AuthService: AuthServiceService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let role: string | null = sessionStorage.getItem("role") ?? localStorage.getItem("role");
    if (role !== null) {
      if ((this.AuthService.isAuth.value) && (role.split(" ")[1] === "ADMIN")) {
        return true;
      }
    }
    this.router.navigate(["/"]);
    return false;
  }
}
