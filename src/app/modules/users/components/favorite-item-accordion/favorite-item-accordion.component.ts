import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerLikeService } from 'src/app/core/http/customer-like.service';
import { CustomerLike } from 'src/app/shared/entities/customerLike';
import {CustomerAddress} from "../../../../shared/entities/customerAddress";
import {GetService} from "../../../../core/http/get.service";

@Component({
  selector: 'app-favorite-item-accordion',
  templateUrl: './favorite-item-accordion.component.html',
  styleUrls: ['./favorite-item-accordion.component.scss']
})
export class FavoriteItemAccordionComponent {
  favoriteGames: CustomerLike[];

  constructor(
    private getService:GetService) {
    this.favoriteGames = [];
  }

  ngOnInit(): void {
    console.log("ici")
      this.getService.getData<CustomerLike[]>("customer/me/favs").subscribe({
        next: (res:CustomerLike[]) => this.favoriteGames = res
      });
  }
}
