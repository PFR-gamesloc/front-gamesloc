import { Component, ViewChild } from '@angular/core';
import { SideNavToggle } from '../../entities/SideNavToggle';
import { Observable, catchError, of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { GameService } from 'src/app/core/http/games.service';
import { GameList } from 'src/app/shared/entities/gameList';
import { DataConfirmDialogService } from '../../services/data-confirm-dialog.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {AdminGamesService} from "../../../../core/http/admin-games.service";

@Component({
  selector: 'app-all-the-games',
  templateUrl: './all-the-games.component.html',
  styleUrls: ['./all-the-games.component.scss']
})
export class AllTheGamesComponent {

  games$!: Observable<GameList[]>;
  gamesList!: GameList[];
  isSideNavCollapsed = false;
  checked!: Boolean;
  screenWith = 0;
  displayedColumns: string[] = ['idJeuDeSociete', 'gameName', 'gameDescr', 'stock', 'gamePrice', 'interactions'];
  dataSource = new MatTableDataSource<GameList>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private adminGameService: AdminGamesService,
    private dialogService: DataConfirmDialogService,
    private toastr: ToastrService,
    private rooter: Router
  ) {
    this.getGames();
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWith = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private getGames(): void {
    this.games$ = this.adminGameService.getAdminGames().pipe(
      catchError((error) => {
        return of([]);
      })
    );

    this.games$.subscribe((games:GameList[]) => {
      this.dataSource.data = games;
      this.gamesList = games;
    })
  }

  public getFiewWords(text: string, numWords: number): string {
    const words:string[] = text.split(' ');
    const sliceWords:string[] = words.slice(0, numWords);
    return sliceWords.join(' ');
  }

  public onDelete(id: Number) {
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res => {
      if (res) {
        this.adminGameService.deleteAGame(id).subscribe({
          next: deleted => {
            if (deleted) {
              this.rooter.navigate(['/admin', 'games'])
                .then(() =>this.toastr.success("Le jeu a bien été supprimé !"))
                .then(window.location.reload)
            } else {
              this.toastr.error("Erreur dans la requête")
            }
          }
        });
      } else {
        this.toastr.info("Vous n'avez pas supprimé le jeu")
      }
    })
  }
}
