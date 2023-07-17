import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../shared/entities/customer";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "/assets/datas/user.json";

  constructor(private httpClient: HttpClient) {}

  getCustomer(): Observable<Customer>{
    return this.httpClient.get<Customer>(this.url);
  }
}
