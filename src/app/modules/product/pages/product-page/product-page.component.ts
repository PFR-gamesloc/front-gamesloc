<<<<<<< HEAD:src/app/modules/users/pages/product-page/product-page.component.ts
import { Component, OnInit } from '@angular/core';
import { GameService } from "../../../../shared/services/game/game.service";
import { Observable } from "rxjs";
import { Game } from "../../../../shared/entities/game";


=======
import {Component, OnInit} from '@angular/core';
import {GameService} from "../../../../core/http/game.service";
import {Observable} from "rxjs";
import {Game} from "../../../../shared/entities/game";
>>>>>>> feat_select_autocomplete:src/app/modules/product/pages/product-page/product-page.component.ts

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})


export class ProductPageComponent implements OnInit {

  input: boolean = true;
  more() {
    this.input = !this.input;
  }
  title: string = " The mysterious"
  game: Game | undefined
  constructor(private gameService: GameService) { }
  ngOnInit() {
    this.gameService.getGame().subscribe({
      next: value => { this.game = value; }
    }
    );
  }

}
