import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Game } from "../../shared/entities/game";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private url: string = "/assets/data/games.json";
  private baseUrl: string = "http://localhost:8080"; 
  constructor(private httpClient: HttpClient) { }

  public getGames(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.url);
  }

  public getGameById(gameId: Number): Observable<Game> {
    const url = `${this.baseUrl}/game/${gameId}`; 
    return this.httpClient.get<Game>(url); 
  }

  public getAdminGames() : Observable<Game[]> {
    const url = `${this.baseUrl}/games`; 
    return this.httpClient.get<Game[]>(url);
  }
}
