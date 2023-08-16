import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/core/http/games.service';
import { GameList } from '../../../../shared/entities/gameList';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { GameDetail } from 'src/app/shared/entities/gameDetail';
import { StorageService } from 'src/app/core/http/storage.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

 @Input() game: GameList| undefined

  constructor(private parent: HomePageComponent) { }
  ngOnInit() {
  }


}
