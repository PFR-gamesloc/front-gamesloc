import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GameList } from "../../shared/entities/gameList";
import { Observable} from "rxjs";
import { GameDetail } from 'src/app/shared/entities/gameDetail';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url: string = "http://localhost:8080/games"
  constructor(private httpclient: HttpClient) { }
  getGameDetail(id: number): Observable<GameDetail> {
    const gameDetailUrl = `${this.url}/${id}`;
    return this.httpclient.get<GameDetail>(gameDetailUrl);
  }
  getGames(): Observable<GameList[]> {
    return this.httpclient.get<GameList[]>(this.url);
  }
}
