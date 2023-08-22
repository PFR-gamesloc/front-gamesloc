import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  baseUrl!:string;

  constructor(private http: HttpClient) {
      this.baseUrl = environment.baseUrl;

  }

  upload(file: File):Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req:HttpRequest<FormData> = new HttpRequest('POST', `${this.baseUrl}/admin/game/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFile(fileName: String):Observable<Blob>{
    return this.http.get(`${this.baseUrl}/product/img/${fileName}`,{ responseType: 'blob' });
  }
}
