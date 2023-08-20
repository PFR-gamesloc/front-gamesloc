import { Component, Input } from '@angular/core';
import { GameList } from '../../../../shared/entities/gameList';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import {FileUploadService} from "../../../admin/services/file-upload.service";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {

  @Input() game!: GameList;
  image:string = '';

  constructor(private parent: HomePageComponent,
              private fileService:FileUploadService) { }

  ngOnInit(){
    this.fileService.getFile(this.game.image).subscribe({
      next: (res:Blob) => this.image = URL.createObjectURL(res)
    })
  }


}
