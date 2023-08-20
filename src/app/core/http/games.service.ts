import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Editor } from 'src/app/shared/entities/editor';
import { Language } from 'src/app/shared/entities/language';
import { Tag } from 'src/app/shared/entities/tag';
import { Type } from 'src/app/shared/entities/type';
import { GetService } from './get.service';
import {GameDetail} from "../../shared/entities/gameDetail";
import {GameEditDto} from "../../modules/admin/entities/GameToEditDto";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private selectedGameIdKey = 'selectedGameId'

  private baseUrl: string = "http://localhost:8080";
  constructor(private httpClient: HttpClient, private getService:GetService) { }

  public getGames(): Observable<GameDetail[]> {
    return this.getService.getData<GameDetail[]>(this.baseUrl + "/product/games");
  }

  public getGameById(gameId: Number): Observable<GameDetail> {
    const url = `product/game/${gameId}`;
    return this.getService.getData<GameDetail>(url);
  }


  setSelectedGameId(gameId: number) {
    localStorage.setItem(this.selectedGameIdKey, gameId.toString());
  }

  getSelectedGameId(): number | undefined {
    const gameId = localStorage.getItem(this.selectedGameIdKey);
    return gameId ? parseInt(gameId) : undefined;
  }
}
