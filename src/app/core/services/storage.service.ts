import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { GameDetail } from 'src/app/shared/entities/gameDetail';
import { OrderPostDTO } from 'src/app/shared/entities/orderPostDTO';
import {environmentProd} from "../../../environment.prod";
import {env} from "../../../env";

@Injectable({
    providedIn: 'root',
})
export class StorageService {

    private baseUrl!: string;
    private cartItemsSubject = new Subject<GameDetail[]>();
    totalPrice = new BehaviorSubject<number>(0);

    constructor(private httpClient: HttpClient) {
      if(environmentProd.production){
        this.baseUrl = environmentProd.baseUrl;
      }
      else {
        this.baseUrl = env.baseUrl;
      }
    }

    getCartItemsObservable(): Observable<GameDetail[]> {
        return this.cartItemsSubject.asObservable();
    }

    emitCartItemsUpdate() {
        this.updatePrice();
        this.cartItemsSubject.next(this.getItems());
    }

    addItem(item: GameDetail): { success: boolean, message: string } {
        const items = this.getItems();

        if (items.some(existingItem => existingItem.gameId === item.gameId)) {
            return { success: false, message: "Le jeu existe déjà dans le panier. Ajout annulé." };
        }

        items.push(item);
        localStorage.setItem('articles', JSON.stringify(items));
        this.emitCartItemsUpdate()
        return { success: true, message: "Le jeu a bien été ajouter au panier !" };
    }

    getItems(): GameDetail[] {
        const itemsString = localStorage.getItem('articles');
        return itemsString ? JSON.parse(itemsString) : [];
    }

    clearItems() {
        localStorage.removeItem('articles');
    }

    removeItem(item: GameDetail) {
        const updatedItems = this.getItems().filter(cartItem => cartItem.gameId !== item.gameId);
        localStorage.setItem('articles', JSON.stringify(updatedItems));
        this.emitCartItemsUpdate();
    }

    validateCart(orderDTO: OrderPostDTO): Observable<any> {
        const url = `${this.baseUrl}/customer/me/create-order`;
        return this.httpClient.post(url, orderDTO);
    }

    updatePrice(){
      if (this.getItems().length === 0){
        this.totalPrice.next(0);
      }
      else {
        let sum = 0;
        for (const item of this.getItems()) {
          sum += item.gamePrice;
        }
        this.totalPrice.next(sum);
      }

    }
}
