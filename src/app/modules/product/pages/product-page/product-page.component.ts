import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { GameService } from "../../../../core/http/games.service";
import { GameDetail } from 'src/app/shared/entities/gameDetail';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
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

  constructor(private gameService: GameService, private route: ActivatedRoute, private router:Router) { }
  ngOnInit() {
   const gameId = this.gameService.getSelectedGameId();
   this.currentWindowWidth = window.innerWidth;
    if (gameId ) { 
      this.gameService.getGameDetail(gameId).subscribe({
        next: (gameDetail) => {
          this.game = gameDetail;
        },
        error: (error) => {
          console.log("Erreur lors de la récupération du produit : ", error);
        }
      });
      } else {
        console.log('ID du jeu invalide');
      }
  }

  @HostListener('window:resize')
  onResize() {
    this!.currentWindowWidth = window.innerWidth
  }

  more() {
    this.input = !this.input;
  }

}
