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
    const url = `${this.baseUrl}/admin/game/all`; 
    return this.httpClient.get<GameList[]>(url);
  }

  public getEditors() : Observable<Editor[]> {
    const url = `${this.baseUrl}/admin/game/editors`; 
    return this.httpClient.get<Editor[]>(url); 
  }

  public getLanguages() : Observable<Language[]> {
    const url = `${this.baseUrl}/admin/game/languages`; 
    return this.httpClient.get<Language[]>(url); 
  }

  public getTags() : Observable<Tag[]> {
    const url = `${this.baseUrl}/admin/game/tags`; 
    return this.httpClient.get<Tag[]>(url); 
  }

  public getTypes() : Observable<Type[]> {
    const url = `${this.baseUrl}/admin/game/types`; 
    return this.httpClient.get<Type[]>(url); 
  }

  public createGame(game: GameList): Observable<GameList> {
    game =  {
      ...game, 
      image: game.image
    }; 

    const url = `${this.baseUrl}/admin/game/add`;
    return this.httpClient.post<GameList>(url, game)
  }

  public updateGame(gameEdit: GameList, id: Number) : Observable<GameList> {
    gameEdit = {
      ...gameEdit, 
      image: gameEdit.image
    }

    const url = `${this.baseUrl}/admin/game/edit/${id}`;
    return this.httpClient.put<GameList>(url, gameEdit); 
  }

  public deleteAGame(id: Number) : Observable<GameList> {
    const url = `${this.baseUrl}/admin/game/delete/${id}`
    return this.httpClient.delete<GameList>(url)
  }

  setSelectedGameId(gameId: number) {
    localStorage.setItem(this.selectedGameIdKey, gameId.toString());
  }

  getSelectedGameId(): number | undefined {
    const gameId = localStorage.getItem(this.selectedGameIdKey);
    return gameId ? parseInt(gameId) : undefined;
  }

  uploadImage(imageFile: File): Observable<string> {
    // Créez une instance de FormData
    const formData = new FormData();
    
    // Ajoutez le fichier image à FormData
    formData.append('image', imageFile);
    
    // Effectuez une requête HTTP POST pour téléverser l'image
    return this.httpClient.post<string>(`${this.baseUrl}/upload`, formData);

  }
}
