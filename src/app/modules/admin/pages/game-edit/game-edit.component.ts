import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/core/http/games.service';
import { SideNavToggle } from '../../entities/SideNavToggle';
import { GameList } from 'src/app/shared/entities/gameList';
import { Observable, first } from 'rxjs';
import { Editor } from 'src/app/shared/entities/editor';
import { Language } from 'src/app/shared/entities/language';
import { Tag } from 'src/app/shared/entities/tag';
import { Type } from 'src/app/shared/entities/type';
import { ToastrService } from 'ngx-toastr';
import { FileUploadService } from '../../entities/file-upload.service';
import { env } from 'src/env';

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
  public isAddImage: boolean = false;
  editors$!: Observable<Editor[]>;
  languages$!: Observable<Language[]>;
  tags$!: Observable<Tag[]>;
  types$!: Observable<Type[]>;
  isSideNavCollapsed = false;
  screenWith = 0;
  uploadedImage!: File;
  imguploaded!: string;
  private isFormSubmitted!: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private gamesService: GameService,
    private toastr: ToastrService,
    private fileUploadService: FileUploadService
  ) {

  }

  ngOnInit(): void {

    this.gameForm = new FormGroup({
      gameName: new FormControl('', [Validators.required, Validators.pattern(env.nameRegex)]),
      gameDescr: new FormControl('', [Validators.required]),
      stock: new FormControl([Validators.required, Validators.pattern(env.integerRegex)]),
      gamePrice: new FormControl([Validators.required, Validators.pattern(env.decimalRegex)]),
      image: new FormControl('', [Validators.required]),
      minPlayer: new FormControl([Validators.required, Validators.pattern(env.integerRegex)]),
      maxPlayer: new FormControl([Validators.required, Validators.pattern(env.integerRegex)]),
      minAge: new FormControl([Validators.required, Validators.pattern(env.integerRegex)]),
      typeId: new FormControl("", [Validators.required]),
      editorId: new FormControl("", [Validators.required]),
      languages: new FormArray([], [Validators.required]),
      tags: new FormArray([], [Validators.required])
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
              typeId: game.type.typeId.toString(),
              editorId: game.editor.editorId.toString(),
            });

            game.image = this.imguploaded;

            game.languages.forEach((language) => {
              const control = new FormControl(language.languageId);
              (this.gameForm.get('languages') as FormArray).push(control);
            });

            // Peupler les contrôles de tags
            game.tags.forEach((tag) => {
              const control = new FormControl(tag.tagId);
              (this.gameForm.get('tags') as FormArray).push(control);
            });

            console.log("New Game");
            console.log(game);

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

  handleLangs(e: any, languageId: Number) {
    const lang = this.gameForm.get('languages') as FormArray;
    const isSelected = e.target.checked;

    if (isSelected) {
      const existsIndex = lang.controls.findIndex((lgue: any) => lgue.value === languageId);
      if (existsIndex === -1) {
        lang.push(new FormControl(languageId));
      }
    } else {
      const index = lang.controls.findIndex((lgue: any) => lgue.value === languageId);
      if (index !== -1) {
        lang.removeAt(index);
      }
    }
  }


  handleTags(e: any, tagId: Number) {
    const tags = this.gameForm.get('tags') as FormArray;
    const tagValue = e.target.checked;

    if (tagValue) {
      const existsIndex = tags.controls.findIndex((inf: any) => inf.value === tagId);
      if (existsIndex === -1) {
        tags.push(new FormControl(tagId));
      }
    } else {
      const index = tags.controls.findIndex((tag: any) => tag.value === tagId);
      if (index !== -1) {
        tags.removeAt(index);
      }
    }
  }

  public saveGame(): void {
    this.isFormSubmitted = true;

    if (this.gameForm.valid) {
      const newGame: GameList = {
        ...this.gameForm.value
      };

      console.log(newGame);

      if (this.isAddMode) {
        this.gamesService.createGame(newGame).subscribe({
          next: (response) => {
            this.saveCompleted(response);
          },
          error: (err) => {
            this.toastr.error("Le jeu n'a pas pu être créé", err.message);
          }
        })
      } else {
        this.gamesService.updateGame(newGame, this.gameId).subscribe({
          next: (response) => {
            this.saveCompleted(response);
          },
          error: (err) => {
            this.toastr.error(`Le jeu n'a pas pu être modifié`, err.message);
          }
        })
      }
    }
  }

  public saveCompleted(response: GameList): void {
    this.gameForm.reset();
    this.router.navigate(['/admin', 'games'])
    this.toastr.success(`Le jeu a été ${this.isAddMode ? "ajouté" : "modifié"} avec succes`, response.gameName);
  }

  onFileSelected(event: any): void {
    this.uploadedImage = event.target.files[0];
  }

  displayImage() {
    return this.game.image;
  }

  toggleAddImage(event: Event) {
    event.preventDefault();
    this.isAddImage = !this.isAddImage;
  }

}
