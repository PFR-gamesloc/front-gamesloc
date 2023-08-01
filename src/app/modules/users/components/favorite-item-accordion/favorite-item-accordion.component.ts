import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private customerLikeService: CustomerLikeService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params?.get('id'); 
      this.getFavoriteOrdersByUserId(Number(id)); 
    })
  }

  private getFavoriteOrdersByUserId(id : number) : void {
    this.favoriteGames$ = this.customerLikeService.getFavoriteItems(id); 
  }

}
