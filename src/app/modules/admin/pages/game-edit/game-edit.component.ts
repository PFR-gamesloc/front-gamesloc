import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/core/http/games.service';
import { SideNavToggle } from '../../entities/SideNavToggle';
import { Observable } from 'rxjs';
import { Editor } from 'src/app/shared/entities/editor';
import { Language } from 'src/app/shared/entities/language';
import { Tag } from 'src/app/shared/entities/tag';
import { Type } from 'src/app/shared/entities/type';
import { ToastrService } from 'ngx-toastr';
import { env } from 'src/env';
import {GameEditDto} from "../../entities/GameToEditDto";
import {AdminGamesService} from "../../../../core/http/admin-games.service";


@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.scss']
})
export class GameEditComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) inputElements!: ElementRef[];

  public gameForm!: FormGroup;
  public gameToEditId!: number;
  public gameToEdit!:GameEditDto;
  public isAddMode!: boolean;
  public isAddImage: boolean = false;
  editors$!: Observable<Editor[]>;
  languages$!: Observable<Language[]>;
  tags$!: Observable<Tag[]>;
  types$!: Observable<Type[]>;
  isSideNavCollapsed = false;
  screenWith = 0;
  uploadedImage!: File;
  uploadedImageName!: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private adminGamesService: AdminGamesService,
    private toastr: ToastrService,
  ) {

  }

  ngOnInit(): void {

    this.gameForm = new FormGroup({
      gameName: new FormControl('', [Validators.required, Validators.pattern(env.nameRegex)]),
      gameDescr: new FormControl('', [Validators.required]),
      stock: new FormControl([Validators.required, Validators.pattern(env.integerRegex)]),
      image: new FormControl(""),
      gamePrice: new FormControl([Validators.required, Validators.pattern(env.decimalRegex)]),
      minPlayer: new FormControl([Validators.required, Validators.pattern(env.integerRegex)]),
      maxPlayer: new FormControl([Validators.required, Validators.pattern(env.integerRegex)]),
      minAge: new FormControl([Validators.required, Validators.pattern(env.integerRegex)]),
      typeId: new FormControl("", [Validators.required]),
      editorId: new FormControl("", [Validators.required]),
      languagesId: new FormArray([], [Validators.required]),
      tagsId: new FormArray([], [Validators.required])
    })


    this.isAddMode = this.activatedRoute.snapshot.url[1].path === "add";

    if (!this.isAddMode){

      this.gameToEditId = this.activatedRoute.snapshot.params['id'];
      this.adminGamesService.getGameToEditById(this.gameToEditId)
        .subscribe((gameToEdit:GameEditDto) => {
            this.gameToEdit = gameToEdit;
            this.gameForm.patchValue({
              gameName: gameToEdit.gameName,
              gameDescr: gameToEdit.gameDescr,
              stock: gameToEdit.stock,
              gamePrice: gameToEdit.gamePrice,
              image: gameToEdit.image,
              minPlayer: gameToEdit.minPlayer,
              maxPlayer: gameToEdit.maxPlayer,
              minAge: gameToEdit.minAge,
              typeId: gameToEdit.typeId.toString(),
              editorId: gameToEdit.editorId.toString(),
            });

            //peupler les contrôles de langues
            gameToEdit.languagesId.forEach((languageId:number) => {
              const control = new FormControl(languageId);
              (this.gameForm.get('languagesId') as FormArray).push(control);
            });

            // Peupler les contrôles de tags
            gameToEdit.tagsId.forEach((tagId:number) => {
              const control = new FormControl(tagId);
              (this.gameForm.get('tagsId') as FormArray).push(control);
            });
          }
        )
    }

    this.editors$ = this.adminGamesService.getEditors();

    this.languages$ = this.adminGamesService.getLanguages();

    this.tags$ = this.adminGamesService.getTags();

    this.types$ = this.adminGamesService.getTypes();
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWith = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  handleLangs(e: any, languageId: Number) {
    const lang = this.gameForm.get('languagesId') as FormArray;
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
    const tags = this.gameForm.get('tagsId') as FormArray;
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
    if (this.gameForm.valid) {
      if(this.isAddMode){
        const newGame: GameEditDto = {
          ...this.gameForm.value,
          image:this.uploadedImageName
        };
        this.adminGamesService.createGame(newGame).subscribe({
          next: (gameCreated:GameEditDto) => {
            this.saveCompleted(gameCreated);
          },
          error: (err) => {
            this.toastr.error("Le jeu n'a pas pu être créé", err.message);
          }
        })
      } else {
        console.log(this.gameToEdit)
        this.gameToEdit = {
          ...this.gameForm.value
        }
        if(this.uploadedImage !== undefined){
          this.gameToEdit.image = this.uploadedImageName;
        }
        console.log(this.gameToEdit)
        this.adminGamesService.updateGame(this.gameToEdit, this.gameToEditId).subscribe({
          next: (response:GameEditDto) => {
            this.saveCompleted(response);
          },
          error: (err) => {
            this.toastr.error(`Le jeu n'a pas pu être modifié`, err.message);
          }
        })
      }
    }
  }

  public saveCompleted(gameCreated: GameEditDto): void {
    this.gameForm.reset();
    this.router.navigate(['/admin', 'games'])
      .then(()=>this.toastr.success(`Le jeu a été ${this.isAddMode ? "ajouté" : "modifié"} avec succès`, gameCreated.gameName));

  }

  onFileSelected(event: any): void {
    this.uploadedImage = event.target.files[0];
    this.uploadedImageName = this.uploadedImage.name;
  }

  toggleAddImage(event: Event) {
    event.preventDefault();
    this.isAddImage = !this.isAddImage;
  }
}
