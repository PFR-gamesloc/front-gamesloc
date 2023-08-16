import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { GameDetail } from 'src/app/shared/entities/gameDetail';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private cartItemsSubject = new Subject<GameDetail[]>();
    constructor() { }

    getCartItemsObservable() {
        console.log("Observable");
        return this.cartItemsSubject.asObservable();
    }

    emitCartItemsUpdate() {
        const items = this.getItems();
        this.cartItemsSubject.next(items);
        
    }

    // Ajouter un article au localStorage
    addItem(item: GameDetail) {
        const items = this.getItems();
        items.push(item);
        localStorage.setItem('articles', JSON.stringify(items));
        console.log("Ajouter")
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
}
