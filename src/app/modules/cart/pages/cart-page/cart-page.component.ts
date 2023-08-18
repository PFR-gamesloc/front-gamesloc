import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/core/http/storage.service';
import { GameDetail } from 'src/app/shared/entities/gameDetail';
import { OrderPostDTO } from 'src/app/shared/entities/orderPostDTO';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cartItems: GameDetail[] = [];
  cartItems$!: Observable<GameDetail[]>;
  totalPrice: number = 0;
  isCartEmpty: boolean = false;

  constructor(private cartService: StorageService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.cartItems$ = this.cartService.getCartItemsObservable(); // Utiliser l'Observable du service
    this.cartItems$.subscribe(items => {
      this.cartItems = items;     
    });
  }

  calculateTotalPrice(): number {
    return this.totalPrice = this.cartItems.reduce((total, item) => total + item.gamePrice, 0);
  }

  validateCart(): void {
    const totalPrice = this.calculateTotalPrice(); // Calculez le prix total du panier de mon user
    const orderDTO: OrderPostDTO = {
      price: totalPrice,
      gamesId: this.cartItems.map(item => (item.gameId)),
    };

    console.log(orderDTO)
    console.log("Envoie au back")
    this.cartService.validateCart(orderDTO).subscribe({
      next: response => {
        console.log(response);

      },
      error: error => {
        console.error(error);
      }
    });
  }

  isEmptyCart(): boolean {
    return this.cartItems.length === 0;
  }
}

