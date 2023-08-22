import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from 'src/app/core/http/games.service';
import { GameList } from 'src/app/shared/entities/gameList';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GetService } from 'src/app/core/http/get.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  images = [
    {
      imageSrc:
      'https://images.pexels.com/photos/776654/pexels-photo-776654.jpeg',
      imageAlt: 'Zoom plateau monopoly',
    },
    {
      imageSrc:
        'https://images.pexels.com/photos/4691584/pexels-photo-4691584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'Jeu de société',
    },
    {
      imageSrc:
        'https://images.pexels.com/photos/6333933/pexels-photo-6333933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'Personnes jouant autour de la table',
    },
    {
      imageSrc:
        'https://images.pexels.com/photos/411195/pexels-photo-411195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: "Pièce d'échec de la Reine ",
    },
  ]

  games$: GameList[] = [];

  constructor(private getService: GetService, private gameService: GameService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.getService.getData<GameList[]>("/product/games").subscribe({
      next: (res: GameList[]) => {
        this.games$ = res;
      },
    });
  };

  navigateToGameDetails(gameId: number, gameName: string) {
    this.gameService.setSelectedGameId(gameId);
    this.router.navigate(['game', gameName]);
  }

}

