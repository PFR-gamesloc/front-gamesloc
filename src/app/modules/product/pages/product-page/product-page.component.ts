import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule, Routes} from "@angular/router";
import {GameService} from "../../../../core/http/games.service";
import { GameDetail } from 'src/app/shared/entities/gameDetail';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})


export class ProductPageComponent implements OnInit {

  game: GameDetail | undefined;
  input: boolean = true;
  more() {
    this.input = !this.input;
  }
  constructor(private gameService: GameService, private route: ActivatedRoute) { }
  ngOnInit() {
   this.route.params.subscribe(params =>{
    const gameId = +params['id'];
    this.gameService.getGameDetail(gameId).subscribe({
      next:( gameDetail) => {
        this.game = gameDetail
      },
      error: (error) => {
        console.log("Erreur lors de la récupération du produit : ", error);
      }
   } );
   });
  }
}

