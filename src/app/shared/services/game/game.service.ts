import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Game} from "../../entities/game";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpclient:HttpClient) { }
  private url:string = "/assets/game.json"
  getGame():Observable<Game>{
    return this.httpclient.get<Game>(this.url);
  }
}
