import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

import { GameDetail } from 'src/app/shared/entities/gameDetail';
import { Order } from 'src/app/shared/entities/order';
import { OrderPostDTO } from 'src/app/shared/entities/orderPostDTO';

@Injectable({
    providedIn: 'root',
})
export class StorageService {

    private baseUrl: string = "http://localhost:8080"

    private cartItemsSubject = new Subject<GameDetail[]>();
    private errorMessage = 'Error item déjà existant';
    constructor(private httpClient: HttpClient) { }

    getCartItemsObservable() {
        console.log("Observable");
        return this.cartItemsSubject.asObservable();
    }

    emitCartItemsUpdate() {
        const items = this.getItems();
        this.cartItemsSubject.next(items);

    }

    addItem(item: GameDetail) {
        const items = this.getItems();
        const result = { success: false, message: "" };

        //Si le jeu existe je compare les ids back 1 jeu par commande
        for (const existingItem of items) {
            if (existingItem.gameId === item.gameId) {
                result.message = "Le jeu existe déjà dans le panier. Ajout annulé.";
                return result;
            }
        }

        items.push(item); // Ajouter l'article une seule fois après avoir vérifié tous les articles
        localStorage.setItem('articles', JSON.stringify(items));
        result.success = true;
        return result;
    }

    // Récupérer la liste d'articles depuis le localStorage
    getItems(): GameDetail[] {
        const itemsString = localStorage.getItem('articles');
        console.log("getItems")
        return itemsString ? JSON.parse(itemsString) : [];

    }

    // Supprimer tous les articles du localStorage
    clearItems() {
        localStorage.removeItem('articles');
        console.log("clearAllItems");
    }

    //supression d'un article
    removeItem(item: GameDetail) {
        const items = this.getItems();
        const updatedItems = items.filter((cartItem: GameDetail) => cartItem.gameId !== item.gameId);
        localStorage.setItem('articles', JSON.stringify(updatedItems));
        console.log("Remove 1 Item");
        this.emitCartItemsUpdate();
    }
    validateCart(orderDTO: OrderPostDTO): Observable<any> {
        const url = `${this.baseUrl}/customer/me/create-order`; // URL Back Order
        return this.httpClient.post(url, orderDTO);
    }

    getErrorMessage(): string {
        return this.errorMessage;
    }
}
