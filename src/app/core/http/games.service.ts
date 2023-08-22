import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { GetService } from './get.service';
import {GameDetail} from "../../shared/entities/gameDetail";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private selectedGameIdKey = 'selectedGameId'

  baseUrl!: string;
  constructor(private httpClient: HttpClient, private getService:GetService) {
      this.baseUrl = environment.baseUrl;
  }

  public getGames(): Observable<GameDetail[]> {
    return this.getService.getData<GameDetail[]>(this.baseUrl + "/product/games");
  }

  public getGameById(gameId: Number): Observable<GameDetail> {
    const url = `/product/game/${gameId}`;
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
