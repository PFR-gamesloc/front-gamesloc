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
import {Commentary} from "../../entities/Commentary";
import {GetService} from "../../../../core/http/get.service";
import {AuthServiceService} from "../../../../core/auth/auth-service.service";
import {Order} from "../../../../shared/entities/order";
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})


export class ProductPageComponent implements OnInit {

  game!: GameDetail;
  input: boolean = true;
  currentWindowWidth!: number;
  commentaries: Commentary[] = [];
  orders: Order[] = [];

  constructor(private gameService: GameService,private customerService: CustomerService, private route: ActivatedRoute, private router: Router, private cartService: StorageService, private getService:GetService, private authService:AuthServiceService) { }
  ngOnInit() {
    this.customerService.getOrders().subscribe({
      next:(orders:Order[]) =>{
        this.orders= orders;
        console.log(orders)
      }
    });
    this.getService.getData<Commentary[]>("product/"+ this.gameService.getSelectedGameId() + "/comments").subscribe({
      next: (value:Commentary[]) => {
        this.commentaries = value;
      }
    })
    const gameId = this.gameService.getSelectedGameId();
    this.currentWindowWidth = window.innerWidth;
    if (gameId) {
      this.gameService.getGameById(gameId).subscribe({
        next: (gameDetail:GameDetail) => {
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

  checkAlreadyCommented():boolean{
    console.log("ici")
    if (!this.authService.isAuth.value){
      return false;
    }
    for (const commentary of this.commentaries) {
      if (commentary.customer.email === sessionStorage.getItem('subject') || commentary.customer.email === localStorage.getItem('subject') ){
        return true;
      }
    }
    return false;
  }

  checkIfOrdered():boolean{

    return true
  }
}


