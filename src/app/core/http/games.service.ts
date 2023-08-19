import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Game } from 'src/app/shared/entities/game';
import { GameList } from 'src/app/shared/entities/gameList';
import { GameDetail } from 'src/app/shared/entities/gameDetail';
import { Editor } from 'src/app/shared/entities/editor';
import { Language } from 'src/app/shared/entities/language';
import { Tag } from 'src/app/shared/entities/tag';
import { Type } from 'src/app/shared/entities/type';
import { Customer } from 'src/app/shared/entities/customer';
import {CommentToPost} from "../../modules/product/entities/CommentToPost";
import { GetService } from './get.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private selectedGameIdKey = 'selectedGameId'

  private baseUrl: string = "http://localhost:8080";
  constructor(private httpClient: HttpClient, private getService:GetService) { }

  public getGames(): Observable<GameList[]> {
    return this.getService.getData<GameList[]>(this.baseUrl + "/product/games");
  }

  public getGameById(gameId: Number): Observable<GameDetail> {
    const url = `${this.baseUrl}/product/game/${gameId}`;
    return this.getService.getData<GameDetail>(url);
  }
  
  public getAdminGames(): Observable<GameList[]> {
    const url = `admin/game/all`;
    return this.getService.getData<GameList[]>(url);
  }

  public getEditors(): Observable<Editor[]> {
    const url = `admin/game/editors`;
    return this.getService.getData<Editor[]>(url);
  }

  public getLanguages(): Observable<Language[]> {
    const url = `admin/game/languages`;
    return this.getService.getData<Language[]>(url);
  }

  public getTags(): Observable<Tag[]> {
    const url = `admin/game/tags`;
    return this.getService.getData<Tag[]>(url);
  }

  public getTypes(): Observable<Type[]> {
    const url = `admin/game/types`;
    return this.getService.getData<Type[]>(url);
  }

  public createGame(game: GameList): Observable<GameList> {
    const url = `${this.baseUrl}/admin/game/add`;
    return this.httpClient.post<GameList>(url, game)
  }

  public updateGame(gameEdit: GameList, id: Number): Observable<GameList> {
    const url = `${this.baseUrl}/admin/game/edit/${id}`;
    return this.httpClient.put<GameList>(url, gameEdit);
  }

  public deleteAGame(id: Number) {
    const url = `${this.baseUrl}/admin/game/delete/${id}`
    return this.httpClient.delete(url)
  }

  setSelectedGameId(gameId: number) {
    localStorage.setItem(this.selectedGameIdKey, gameId.toString());
  }

  getSelectedGameId(): number | undefined {
    const gameId = localStorage.getItem(this.selectedGameIdKey);
    return gameId ? parseInt(gameId) : undefined;
  }
}
