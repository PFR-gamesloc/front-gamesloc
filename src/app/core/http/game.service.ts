import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Game} from "../../shared/entities/game";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url:string = "/assets/datas/game.json"
  constructor(private httpclient:HttpClient) { }
  getGame():Observable<Game>{
    return this.httpclient.get<Game>(this.url);
  }
}
