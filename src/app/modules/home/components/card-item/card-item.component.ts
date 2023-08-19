import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/core/http/games.service';
import { GameList } from '../../../../shared/entities/gameList';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { GameDetail } from 'src/app/shared/entities/gameDetail';
import { StorageService } from 'src/app/core/http/storage.service';
import {FileUploadService} from "../../../admin/entities/file-upload.service";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {

  @Input() game!: GameList;
  image = '';

  constructor(private parent: HomePageComponent,
              private fileService:FileUploadService) { }

  ngOnInit(){
    this.fileService.getFile(this.game.image).subscribe({
      next: (res:Blob) => this.image = URL.createObjectURL(res)
    })
  }


}
