import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/core/http/game.service';
import { Game } from '../../../../shared/entities/game';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
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
