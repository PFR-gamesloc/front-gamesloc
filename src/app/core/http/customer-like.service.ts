import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerLike } from 'src/app/shared/entities/customerLike';

@Injectable({
  providedIn: 'root'
})
export class CustomerLikeService {
  private url: string = "http://localhost:8080/customer/1/favs";

  constructor(private httpClient: HttpClient) { }

  getFavoriteGames(): Observable<CustomerLike[]> {
    return this.httpClient.get<CustomerLike[]>(this.url);
  }
}
