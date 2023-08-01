import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from 'src/app/shared/entities/address';

@Injectable({
  providedIn: 'root'
})
export class UserAddressService {
  private baseUrl: string = "http://localhost:8080/customer"; 

  constructor(private httpClient: HttpClient) {}

  public getUserAddress(userId : number): Observable<Address>{
    const url = `${this.baseUrl}/${userId}/address`; 
    return this.httpClient.get<Address>(url); 
  }
}
