import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { GameService } from "../../../../core/http/games.service";
import { GameDetail } from 'src/app/shared/entities/gameDetail';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Game } from 'src/app/shared/entities/game';
import { StorageService } from 'src/app/core/http/storage.service';
import { CustomerService } from 'src/app/core/http/customer.service';
import { AddGameToCustomerFavDTO } from 'src/app/shared/entities/AddGameToCustomerFavDTO';
import { GetService } from 'src/app/core/http/get.service';
import { CustomerLike } from 'src/app/shared/entities/customerLike';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})


export class ProductPageComponent implements OnInit {

  game: GameDetail | undefined;
  input: boolean = true;
  currentWindowWidth!: number;
  isGameLiked: boolean | undefined;
  errorMessage: string = '';

  constructor(private gameService: GameService, private getService: GetService, private customerService: CustomerService, private route: ActivatedRoute, private router: Router, private cartService: StorageService) { }
  ngOnInit() {
    const gameId = this.gameService.getSelectedGameId();
    this.currentWindowWidth = window.innerWidth;
    if (gameId) {
      console.log("getData Detail game")
      this.getService.getData<GameDetail>(`product/game/${gameId}`).subscribe({
        next: (res: GameDetail) => {
          this.game = res;
          this.getService.getData<CustomerLike[]>(`customer/me/favs`).subscribe({
            next: (favoriteItems: CustomerLike[]) => {
              this.isGameLiked = favoriteItems.some(gameLike => gameLike.gameId === gameId);
              console.log(this.isGameLiked);
            },
          })
        },
        error: (err) => {
          console.log("Erreur le jeu souhaitez n'existe pas", err);
          this.router.navigate(['/home-page']); // Redirect to the 'not-found' route
        }
      });
    }
  }

  @HostListener('window:resize')
  onResize() {
    this!.currentWindowWidth = window.innerWidth
  }

  more() {
    this.input = !this.input;
  }


  addToCart() {
    const result = this.cartService.addItem(this.game!);
    if(result.message){
      this.errorMessage = result.message;
    }
    if(result.success){
      this.router.navigate(['/']);
    }
  }

  addToFavorites(game: Game): void {
    this.isGameLiked = true;
    let gameId: AddGameToCustomerFavDTO = {
      id: game.gameId
    }
    this.customerService.addToFavorites(gameId).subscribe({
      next: response => {
        console.log(response); 

      },
      error: error => {
        console.error(error); 
      }
    });
  }

  removeToFavorites(game: Game): void {
    this.isGameLiked = false;
    let gameId: AddGameToCustomerFavDTO = {
      id: game.gameId
    }
    this.customerService.removeToFavorites(gameId).subscribe({
      next: response => {
        console.log(response);

      },
      error: error => {
        console.error(error);
      }
    });
  }

  closePopup() {
    this.errorMessage = '';
  }

}


