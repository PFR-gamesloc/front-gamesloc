import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerLike } from 'src/app/shared/entities/customerLike';

@Injectable({
  providedIn: 'root'
})
export class CustomerLikeService {

  private baseUrl: string = "http://localhost:8080/customer"; 

  constructor(private httpClient: HttpClient) { }

  public getFavoriteItems(userId : number): Observable<CustomerLike[]> {
    const url = `${this.baseUrl}/${userId}/favs`; 
    return this.httpClient.get<CustomerLike[]>(url)
  }
}
