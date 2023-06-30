import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../../entities/game";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private url:string = "/assets/data/games.json";
  constructor(private httpClient: HttpClient) { }

  getGames():Observable<Game[]>{
    return this.httpClient.get<Game[]>(this.url);
  }
}
