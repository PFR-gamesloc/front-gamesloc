import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";
import { Game } from 'src/app/shared/entities/game';
import { GameList } from 'src/app/shared/entities/gameList';
import { GameDetail } from 'src/app/shared/entities/gameDetail';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private selectedGameIdKey = 'selectedGameId'

  private baseUrl: string = "http://localhost:8080"; 
  constructor(private httpClient: HttpClient) { }

  public getGames(): Observable<GameList[]> {
    return this.httpClient.get<GameList[]>(this.baseUrl+"/product/games");
  }

  public getGameById(gameId: Number): Observable<GameDetail> {
    const url = `${this.baseUrl}/product/game/${gameId}`; 
    return this.httpClient.get<GameDetail>(url); 
  }

  public getAdminGames() : Observable<GameList[]> {
    const url = `${this.baseUrl}/games`; 
    return this.httpClient.get<GameList[]>(url);
  }

  setSelectedGameId(gameId: number) {
    localStorage.setItem(this.selectedGameIdKey, gameId.toString());
  }

  getSelectedGameId(): number | undefined {
    const gameId = localStorage.getItem(this.selectedGameIdKey);
    return gameId ? parseInt(gameId) : undefined;
  }
}
