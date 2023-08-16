import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/core/http/storage.service';
import { GameDetail } from 'src/app/shared/entities/gameDetail';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit{
  cartItems: GameDetail[] =[];
  cartItems$!: Observable<GameDetail[]>;

  constructor(private cartService: StorageService) {}

  ngOnInit(): void {
   this.cartItems = this.cartService.getItems();
    this.cartItems$ = this.cartService.getCartItemsObservable(); // Utiliser l'Observable du service
    this.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }
}

