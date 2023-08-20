import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {mergeMap, Observable, of} from "rxjs";
import {GetService} from "../http/get.service";
import {Token} from "../../modules/auth/entities/token";
import {Router} from "@angular/router";
import {environmentProd} from "../../../environment.prod";
import {env} from "../../../env";

@Injectable({
  providedIn: 'root'
})
export class AddHeaderInterceptorService implements HttpInterceptor {
  baseUrl!:string;
  constructor(private getService:GetService, private router:Router) {
    if(environmentProd.production){
      this.baseUrl = environmentProd.baseUrl;
    }
    else {
      this.baseUrl = env.baseUrl;
    }
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
