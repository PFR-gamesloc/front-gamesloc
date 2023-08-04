import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";
import { Game } from 'src/app/shared/entities/game';
import { GameList } from 'src/app/shared/entities/gameList';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private selectedGameIdKey = 'selectedGameId'

  private url: string = "/assets/data/games.json";
  private baseUrl: string = "http://localhost:8080"; 
  constructor(private httpClient: HttpClient) { }

  public getGames(): Observable<GameList[]> {
    return this.httpClient.get<GameList[]>(this.url);
  }

  public getGameById(gameId: Number): Observable<Game> {
    const url = `${this.baseUrl}/game/${gameId}`; 
    return this.httpClient.get<Game>(url); 
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
