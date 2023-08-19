import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  purchaseResponse: number = 0;

  constructor(private cartService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.cartItems$ = this.cartService.getCartItemsObservable();
    this.cartItems$.subscribe(items => {
      this.cartItems = items;
    });

    this.calculateTotalPrice();
  }
  calculateTotalPrice(): number {
    return this.totalPrice = this.cartItems.reduce((total, item) => total + item.gamePrice, 0);
  }

  validateCart(): void {
    const totalPrice = this.calculateTotalPrice();
    const orderDTO: OrderPostDTO = {
      price: totalPrice,
      gamesId: this.cartItems.map(item => item.gameId),
    };

    this.cartService.validateCart(orderDTO).subscribe({
      next: response => {
        this.purchaseResponse = response;
        this.cartService.clearItems();
        this.cartService.emitCartItemsUpdate();
        this.router.navigate(['/']);
      },
    });
  }

  isEmptyCart(): boolean {
    return this.cartItems.length === 0;
  }

  closePurchasePopup(): void {
    this.purchaseResponse = 0;
  }
}
