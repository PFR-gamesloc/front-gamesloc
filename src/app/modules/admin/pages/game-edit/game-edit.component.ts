import { Component, ElementRef, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/core/http/games.service';
import { Game } from 'src/app/shared/entities/game';
import { SideNavToggle } from '../../entities/SideNavToggle';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.scss']
})
export class GameEditComponent {

  @ViewChildren(FormControlName, { read: ElementRef }) inputElements!: ElementRef[];

  public gameForm!: FormGroup;
  public game!: Game;
  public pageTitle!: string;
  public isAddMode!: boolean;
  isSideNavCollapsed = false;
  screenWith = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private gamesService: GameService
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!this.isAddMode) {
        this.getSelectedGame(id);
      }
    })
  }

  public getSelectedGame(id: number): void {
    this.gamesService.getGameById(id).subscribe({
      next: (game: Game) => this.displayGame(game)
    });
  }

  public displayGame(game: Game): void {
    this.game = game;

    if (this.game.gameId === 0) {
      this.pageTitle = "Ajouter un jeu"
    } else {
      this.pageTitle = `Modifier le jeu ${this.game.gameName}`;
    }

    // this.gameForm.patchValue({
    //   gameName: this.game.gameName,
    //   gameDescr: this.game.gameDescr,
    //   stock: this.game.stock,
    //   gamePrice: this.game.gamePrice,
    //   image: this.game.image,
    //   minPlayer: this.game.minPlayer,
    //   maxPlayer: this.game.maxPlayer,
    //   minAge: this.game.minAge,
    //   type: this.game.type,
    //   editor: this.game.editor
    // })

    // this.gameForm.setControl('languages', this.fb.array(this.game.languages) || [])
    // this.gameForm.setControl('tags', this.fb.array(this.game.tags) || [])
  }

  public get languages(): FormArray {
    return this.gameForm.get('languages') as FormArray;
  }

  public get tags(): FormArray {
    return this.gameForm.get('tags') as FormArray;
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWith = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

}
