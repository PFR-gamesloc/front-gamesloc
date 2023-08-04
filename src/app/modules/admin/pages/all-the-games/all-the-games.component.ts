import { Component, ViewChild } from '@angular/core';
import { SideNavToggle } from '../../entities/SideNavToggle';
import { Game } from 'src/app/shared/entities/game';
import { Observable, catchError, of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { GamesService } from 'src/app/core/http/games.service';

@Component({
  selector: 'app-all-the-games',
  templateUrl: './all-the-games.component.html',
  styleUrls: ['./all-the-games.component.scss']
})
export class AllTheGamesComponent {

  games$!: Observable<Game[]>;
  gamesList!: Game[]; 
  isSideNavCollapsed = false;
  checked!: Boolean;
  screenWith = 0;
  displayedColumns: string[] = ['idJeuDeSociete', 'gameName', 'gameDescr', 'stock', 'gamePrice', 'interactions'];
  dataSource = new MatTableDataSource<Game>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private gamesService: GamesService) {
    this.getGames();
  }

  toggleChecked(): void {
    this.checked = !this.checked; 
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWith = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private getGames(): void {
    this.games$ = this.gamesService.getAdminGames().pipe(
      catchError((error) => {
        console.error('Error fetching games:', error);
        return of([]);
      })
    );

    this.games$.subscribe((games) => {
      this.dataSource.data = games;
      this.gamesList = games; 
      console.log(games)
    })
  }

  public getFiewWords(text: string, numWords: number): string {
    const words = text.split(' ');
    const sliceWords = words.slice(0, numWords);
    return sliceWords.join(' ');
  }
}
