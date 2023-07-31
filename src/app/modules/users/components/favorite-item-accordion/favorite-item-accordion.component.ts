import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerLikeService } from 'src/app/core/http/customer-like.service';
import { CustomerLike } from 'src/app/shared/entities/customerLike';

@Component({
  selector: 'app-favorite-item-accordion',
  templateUrl: './favorite-item-accordion.component.html',
  styleUrls: ['./favorite-item-accordion.component.scss']
})
export class FavoriteItemAccordionComponent {
  favoriteGames$: Observable<CustomerLike[]> | undefined; 

  constructor(private customerLikeService: CustomerLikeService) {}

  ngOnInit(): void {
    this.favoriteGames$ = this.customerLikeService.getFavoriteGames(); 
    console.log(this.favoriteGames$);
    
  }

}
