import {Component} from '@angular/core';
import {CustomerLike} from 'src/app/shared/entities/customerLike';
import {GetService} from "../../../../core/http/get.service";

@Component({
  selector: 'app-favorite-item-accordion',
  templateUrl: './favorite-item-accordion.component.html',
  styleUrls: ['./favorite-item-accordion.component.scss']
})
export class FavoriteItemAccordionComponent {
  favoriteGames: CustomerLike[];

  constructor(
    private getService: GetService) {
    this.favoriteGames = [];
  }

  ngOnInit(): void {
    this.getService.getData<CustomerLike[]>("customer/me/favs").subscribe({
      next: (res: CustomerLike[]) => this.favoriteGames = res
    });
  }
}
