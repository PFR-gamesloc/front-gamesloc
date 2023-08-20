import {Component} from '@angular/core';
import {CustomerLike} from 'src/app/shared/entities/customerLike';
import {GetService} from "../../../../core/http/get.service";
import {FileUploadService} from "../../../admin/services/file-upload.service";
import {GameService} from "../../../../core/http/games.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-favorite-item-accordion',
  templateUrl: './favorite-item-accordion.component.html',
  styleUrls: ['./favorite-item-accordion.component.scss']
})
export class FavoriteItemAccordionComponent {
  favoriteGames: CustomerLike[];
  image:string ='';
  constructor(
    private getService: GetService,
    private fileService: FileUploadService,
    private gameService:GameService,
    private router:Router) {
    this.favoriteGames = [];
  }

  ngOnInit(): void {
    this.getService.getData<CustomerLike[]>("/customer/me/favs").subscribe({
      next: (customerLikes: CustomerLike[]) => {
        this.favoriteGames = customerLikes;
        for (const customerLike of customerLikes) {
          this.fileService.getFile(customerLike.image).subscribe({
            next:res=> this.image = URL.createObjectURL(res)
          })
        }
      }
    });
  }

  navigateToGameDetails(gameId: number, gameName: string) {
    this.gameService.setSelectedGameId(gameId);
    this.router.navigate(['game', gameName]);
  }
}
