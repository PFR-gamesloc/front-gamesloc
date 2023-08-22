import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {GetService} from "../http/get.service";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AddHeaderInterceptorService implements HttpInterceptor {
  baseUrl!: string;

  constructor(private getService: GetService, private router: Router) {
    this.baseUrl = environment.baseUrl;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req.url.startsWith(this.baseUrl + "/auth") && !req.url.startsWith(this.baseUrl + "/product")) {
      let token = localStorage.getItem("token") ?? sessionStorage.getItem("token");
      // if (token === null ){
      //   this.router.navigate(["/services/login"])
      // }
      req = req.clone({
        headers: req.headers.append(
          'Authorization', 'Bearer ' + token
        )
      });
      return next.handle(req)
    } else {
      return next.handle(req)
    }
  }
}
