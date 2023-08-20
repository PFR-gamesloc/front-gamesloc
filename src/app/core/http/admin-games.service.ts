import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {GameEditDto} from "../../modules/admin/entities/GameToEditDto";
import {GameDetail} from "../../shared/entities/gameDetail";
import {Editor} from "../../shared/entities/editor";
import {Language} from "../../shared/entities/language";
import {Tag} from "../../shared/entities/tag";
import {Type} from "../../shared/entities/type";
import {GetService} from "./get.service";
import {HttpClient} from "@angular/common/http";
import {env} from "../../../env"
import {environmentProd} from "../../../environment.prod"
import {AdminOrder} from "../../shared/entities/admin-order";
@Injectable({
  providedIn: 'root'
})
export class AdminGamesService {

  baseUrl!:string;
  constructor(private getService:GetService,
              private httpClient:HttpClient) {
    if(environmentProd.production){
      this.baseUrl = environmentProd.baseUrl;
    }
    else {
      this.baseUrl = env.baseUrl;
    }
  }


  public getGameToEditById(gameId: number): Observable<GameEditDto> {
    return this.getService.getData<GameEditDto>("admin/game/"+gameId);
  }

  public getAdminGames(): Observable<GameDetail[]> {
    const url = `product/games`;
    return this.getService.getData<GameDetail[]>(url);
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

  public createGame(game: GameEditDto): Observable<GameEditDto> {
    const url = `${this.baseUrl}/admin/game/add`;
    return this.httpClient.post<GameEditDto>(url, game)
  }

  public updateGame(gameEdit: GameEditDto, id: Number): Observable<GameEditDto> {
    const url = `${this.baseUrl}/admin/game/edit/${id}`;
    return this.httpClient.put<GameEditDto>(url, gameEdit);
  }

  public deleteAGame(id: Number) {
    const url = `${this.baseUrl}/admin/game/delete/${id}`
    return this.httpClient.delete(url)
  }

  public getAdminOrders(): Observable<AdminOrder[]> {
    const url = `admin/order/all`;
    return this.getService.getData<AdminOrder[]>(url);
  }
}
