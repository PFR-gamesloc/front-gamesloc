import {Component, OnInit} from '@angular/core';
import {GameService} from "../../../../core/http/game.service";
import {Observable} from "rxjs";
import {Game} from "../../../../shared/entities/game";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit{
  title:string =  " The mysterious"
  game: Game |undefined
  constructor(private gameService: GameService) {}
  ngOnInit() {
    this.gameService.getGame().subscribe({
      next: value => {this.game = value;}
      }
    );
  }

}
