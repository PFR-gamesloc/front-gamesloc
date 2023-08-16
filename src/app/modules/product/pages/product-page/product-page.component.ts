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

  constructor(private gameService: GameService,private customerService: CustomerService, private route: ActivatedRoute, private router: Router, private cartService: StorageService) { }
  ngOnInit() {
    const gameId = this.gameService.getSelectedGameId();
    this.currentWindowWidth = window.innerWidth;
    if (gameId) {
      this.gameService.getGameById(gameId).subscribe({
        next: (gameDetail) => {
          this.game = gameDetail;
        },
        error: (error) => {

        }
      });
    } else {

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
    this.cartService.addItem(this.game!); // la méthode d'ajout au panier du service
    console.log("Item ajouter avec succes" + this.game?.gameName)
    console.log(this.cartService)
  }

  addToFavorites(game: Game): void {
    let gameId : AddGameToCustomerFavDTO ={
      id : game.gameId
    }
    this.customerService.addToFavorites(gameId).subscribe({
      next: response => {
        console.log(response); // You can handle the success response
      },
      error: error => {
        console.error(error); // Handle the error response
      }
    });
  }
}


