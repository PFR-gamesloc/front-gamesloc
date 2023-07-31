import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from 'src/app/shared/entities/address';

@Injectable({
  providedIn: 'root'
})
export class UserAddressService {
  private url: string = "/assets/datas/user-address.json"; 

  constructor(private httpClient: HttpClient) {}

  getUserAddress(): Observable<Address>{
    return this.httpClient.get<Address>(this.url); 
  }
}
