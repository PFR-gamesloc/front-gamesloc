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
import { Type } from 'src/app/shared/entities/type';
import { Game } from 'src/app/shared/entities/game';
import { ToastrService} from 'ngx-toastr'; 

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
  types$!: Observable<Type[]>;
  isSideNavCollapsed = false;
  screenWith = 0;
  private isFormSubmitted!: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private gamesService: GameService, 
    private toastr: ToastrService 
  ) { }

  ngOnInit(): void {
    this.gameForm = new FormGroup({
      gameName: new FormControl(''),
      gameDescr: new FormControl(''),
      stock: new FormControl(),
      gamePrice: new FormControl(),
      image: new FormControl(''),
      minPlayer: new FormControl(),
      maxPlayer: new FormControl(),
      minAge: new FormControl(),
      typeId: new FormControl(),
      editorId: new FormControl(),
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
              typeId: game.type,
              editorId: game.editor, 
              languages: game.languages, 
              tags: game.tags
            });

          }
        )
    }

    this.editors$ = this.gamesService.getEditors();

    this.languages$ = this.gamesService.getLanguages();

    this.tags$ = this.gamesService.getTags();

    this.types$ = this.gamesService.getTypes();
  }

  public displayGame(game: GameList): void {
    this.game = game;
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWith = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  handleLangs(e: any) {
    const lang = this.gameForm.get('languages') as FormArray;
    const langValue = e.target.value;

    if (e.target.checked) {
      lang.push(new FormControl(langValue));
    } else {
      const index = lang.controls.findIndex((lgue: any) => lgue.value === langValue);
      if (index !== -1) {
        lang.removeAt(index);
      }
    }
  }

  handleTags(e: any) {
    const tags = this.gameForm.get('tags') as FormArray;
    const tagValue = e.target.value;

    if (e.target.checked) {
      tags.push(new FormControl(tagValue));
    } else {
      const index = tags.controls.findIndex((tag: any) => tag.value === tagValue);
      if (index !== -1) {
        tags.removeAt(index);
      }
    }
  }

  public saveGame(): void {
    this.isFormSubmitted = true;
    if (this.gameForm.valid) {
      const newGame: GameList = {
        ...this.gameForm.value,
        image: 'assets/img'
      };

      console.log(newGame);
      

      this.gamesService.createGame(newGame).subscribe({
        next: (response) => {
          console.log('Jeu ajouté avec success ', response);
          this.saveCompleted(response); 
        },
        error: (err) => {
          console.log('Error lors ajout ', err.message)
          this.toastr.error("Le jeu n'a pas pu être créé", err.message)
      }
      })

      // if (newGame.gameId === 0) {
      //   this.gamesService.createGame(newGame).subscribe({
      //     next: (response) => console.log('Jeu ajouté avec success ', response),
      //     error: (err) => console.log('Error lors ajout ', err)
      // })
      // } else {
      //   this.gamesService.updateGame(newGame).subscribe({
      //     next: (response) => console.log('Jeu modifié avec success ', response),
      //     error: (err) => console.log("Error lors modification ", err)
      //   })
      // }
    }
  }

  public saveCompleted(response: GameList) : void {
    this.gameForm.reset(); 
    this.router.navigate(['/admin', 'games'])
    this.toastr.success("Le jeu a été ajouté avec success", response.gameName); 
  }

}
