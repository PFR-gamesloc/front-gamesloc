import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerLike } from 'src/app/shared/entities/customerLike';
import { GetService } from './get.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerLikeService {

  private baseUrl: string = "http://localhost:8080/customer";

  constructor(private httpClient: HttpClient, private getService: GetService) { }

  //A SAUTER
  public getFavoriteItems(userId: number): Observable<CustomerLike[]> {
    const url = `${this.baseUrl}/${userId}/favs`;
    return this.getService.getData<CustomerLike[]>(url)
  }
}
