import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/core/http/games.service';
import { SideNavToggle } from '../../entities/SideNavToggle';
import { GameList } from 'src/app/shared/entities/gameList';
import { Observable, first } from 'rxjs';
import { Editor } from 'src/app/shared/entities/editor';
import { Language } from 'src/app/shared/entities/language';
import { Tag } from 'src/app/shared/entities/tag';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.scss']
})
export class GameEditComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) inputElements!: ElementRef[];

  public gameForm!: FormGroup;
  public gameId!: number;
  public game!: GameList;
  public pageTitle!: string;
  public isAddMode!: boolean;
  editors$!: Observable<Editor[]>; 
  languages$!: Observable<Language[]>; 
  tags$!: Observable<Tag[]>; 
  isSideNavCollapsed = false;
  screenWith = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private gamesService: GameService
  ) { }

  ngOnInit(): void {
    this.gameForm = new FormGroup({
      gameName: new FormControl(''),
      gameDescr: new FormControl(''),
      stock: new FormControl(''),
      gamePrice: new FormControl(''),
      image: new FormControl(''),
      minPlayer: new FormControl(''),
      maxPlayer: new FormControl(''),
      minAge: new FormControl(''),
      type: new FormControl(''),
      editor: new FormControl(''),
      languages: new FormArray([]),  
      tags: new FormArray([])
    })

    this.gameId = this.route.snapshot.params['id'];
    this.isAddMode = !this.gameId;

    if (!this.isAddMode) {
      this.gamesService.getGameById(this.gameId)
        .pipe(first())
        .subscribe(
          game => {
            this.gameForm.patchValue({
              gameName: game.gameName,
              gameDescr: game.gameDescr,
              stock: game.stock,
              gamePrice: game.gamePrice,
              image: game.image,
              minPlayer: game.minPlayer,
              maxPlayer: game.maxPlayer,
              minAge: game.minAge,
              type: game.type,
              editor: game.editor
            });

            this.gameForm.setControl('languages', this.fb.array(game.languages) || [])
            this.gameForm.setControl('tags', this.fb.array(game.tags) || [])
          }
        )
    }

    this.editors$ = this.gamesService.getEditors(); 

    this.languages$ = this.gamesService.getLanguages(); 

    this.tags$ = this.gamesService.getTags(); 
  }

  public displayGame(game: GameList): void {
    this.game = game;
  }

  public get languages(): FormArray {
    return this.gameForm.get('languages') as FormArray;
  }

  public addLanguage(): void {
    this.languages.push(new FormControl(true)); 
  }

  public get tags(): FormArray {
    return this.gameForm.get('tags') as FormArray;
  }

  public addTag(): void {
    this.tags.push(new FormControl('')); 
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWith = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

}
