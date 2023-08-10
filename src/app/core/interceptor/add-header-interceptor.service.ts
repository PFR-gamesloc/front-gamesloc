import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {mergeMap, Observable, of} from "rxjs";
import {GetService} from "../http/get.service";
import {Token} from "../../modules/auth/entities/token";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AddHeaderInterceptorService implements HttpInterceptor {

  constructor(private getService:GetService, private router:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req.url.startsWith("http://localhost:8080/auth/") && !req.url.startsWith("http://localhost:8080/product/" )) {
      let token = localStorage.getItem("token") ?? sessionStorage.getItem("token");
      // if (token === null ){
      //   this.router.navigate(["/auth/login"])
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
