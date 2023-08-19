import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GameDetail } from 'src/app/shared/entities/gameDetail';
import { OrderPostDTO } from 'src/app/shared/entities/orderPostDTO';

@Injectable({
    providedIn: 'root',
})
export class StorageService {

    private baseUrl: string = "http://localhost:8080"
    private cartItemsSubject = new Subject<GameDetail[]>();

    constructor(private httpClient: HttpClient) { }

    getCartItemsObservable(): Observable<GameDetail[]> {
        return this.cartItemsSubject.asObservable();
    }

    emitCartItemsUpdate() {
        this.cartItemsSubject.next(this.getItems());
    }

    addItem(item: GameDetail): { success: boolean, message: string } {
        const items = this.getItems();
        
        if (items.some(existingItem => existingItem.gameId === item.gameId)) {
            return { success: false, message: "Le jeu existe déjà dans le panier. Ajout annulé." };
        }
        
        items.push(item);
        localStorage.setItem('articles', JSON.stringify(items));
        return { success: true, message: "" };
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
}
