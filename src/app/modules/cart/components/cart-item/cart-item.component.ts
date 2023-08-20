import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameDetail } from '../../../../shared/entities/gameDetail';
import { StorageService } from 'src/app/core/services/storage.service';
import {FileUploadService} from "../../../admin/services/file-upload.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() item!: GameDetail ;
  @Output() removeItemEvent = new EventEmitter<GameDetail>();
  image:string = "";
  constructor(private cartService: StorageService,
              private fileService: FileUploadService) { }

  ngOnInit(){
    this.fileService.getFile(this.item.image).subscribe({
        next: (res:Blob) => this.image = URL.createObjectURL(res)
      }
    )
  }

  removeFromCart(item: GameDetail) {
    this.cartService.removeItem(item);
    this.cartService.emitCartItemsUpdate();
    console.log(item)

  }
}
