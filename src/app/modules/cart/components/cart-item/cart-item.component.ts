import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameDetail } from '../../../../shared/entities/gameDetail';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() item: GameDetail | undefined;
  @Output() removeItemEvent = new EventEmitter<GameDetail>();
  constructor(private cartService: StorageService) { }

  removeFromCart(item: GameDetail) {
    this.cartService.removeItem(item);
    this.cartService.emitCartItemsUpdate();
  }
}
