import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {mergeMap, Observable, of} from "rxjs";
import {GetService} from "../http/get.service";
import {Token} from "../../modules/auth/entities/token";

@Injectable({
  providedIn: 'root'
})
export class AddHeaderInterceptorService implements HttpInterceptor {

  constructor(private getService:GetService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url != "http://localhost:8080/auth/authenticate") {
      req = req.clone({
        headers: req.headers.append(
          'Authorization', 'Bearer ' + localStorage.getItem("token")
        )
      });
      return next.handle(req)
    } else {
      return next.handle(req)
    }
  }
}
