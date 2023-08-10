import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";
import { Game } from 'src/app/shared/entities/game';
import { GameList } from 'src/app/shared/entities/gameList';
import { GameDetail } from 'src/app/shared/entities/gameDetail';
import { Editor } from 'src/app/shared/entities/editor';
import { Language } from 'src/app/shared/entities/language';
import { Tag } from 'src/app/shared/entities/tag';
import { Type } from 'src/app/shared/entities/type';

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

  public getEditors() : Observable<Editor[]> {
    const url = `${this.baseUrl}/auth/editors`; 
    return this.httpClient.get<Editor[]>(url); 
  }

  public getLanguages() : Observable<Language[]> {
    const url = `${this.baseUrl}/auth/languages`; 
    return this.httpClient.get<Language[]>(url); 
  }

  public getTags() : Observable<Tag[]> {
    const url = `${this.baseUrl}/auth/tags`; 
    return this.httpClient.get<Tag[]>(url); 
  }

  public getTypes() : Observable<Type[]> {
    const url = `${this.baseUrl}/auth/types`; 
    return this.httpClient.get<Type[]>(url); 
  }

  public createGame(game: GameList): Observable<GameList> {
    game =  {
      ...game, 
      image: 'assets/img'
    }; 

    const url = `${this.baseUrl}/auth/game/add`;
    return this.httpClient.post<GameList>(url, game)
  }

  setSelectedGameId(gameId: number) {
    localStorage.setItem(this.selectedGameIdKey, gameId.toString());
  }

  getSelectedGameId(): number | undefined {
    const gameId = localStorage.getItem(this.selectedGameIdKey);
    return gameId ? parseInt(gameId) : undefined;
  }
}
