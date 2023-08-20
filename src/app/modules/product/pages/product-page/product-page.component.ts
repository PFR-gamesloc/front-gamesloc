import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../../../../core/http/games.service";
import {GameDetail} from 'src/app/shared/entities/gameDetail';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {Game} from 'src/app/shared/entities/game';
import {StorageService} from 'src/app/core/services/storage.service';
import {CustomerService} from 'src/app/core/http/customer.service';
import {AddGameToCustomerFavDTO} from 'src/app/shared/entities/AddGameToCustomerFavDTO';
import {Commentary} from "../../entities/Commentary";
import {GetService} from "../../../../core/http/get.service";
import {AuthService} from "../../../../core/services/auth.service";
import {Order} from "../../../../shared/entities/order";
import {CustomerLike} from 'src/app/shared/entities/customerLike';
import {ToastrService} from "ngx-toastr";
import {FileUploadService} from "../../../admin/services/file-upload.service";

registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})


export class ProductPageComponent implements OnInit {

  game!: GameDetail;
  input: boolean = true;
  currentWindowWidth!: number;
  commentaries: Commentary[] = [];
  orders: Order[] = [];
  isGameLiked: boolean = false;
  errorMessage: string = '';
  rating: number = 0;
  nbRating: number = 0;

  image = '';

  constructor(private gameService: GameService,
              private customerService: CustomerService,
              private route: ActivatedRoute,
              private router: Router,
              private cartService: StorageService,
              private getService: GetService,
              private authService: AuthService,
              private toastrService: ToastrService,
              private fileService: FileUploadService) {
  }

  ngOnInit() {

    if (this.authService.isAuth.value) {
      this.customerService.getOrders().subscribe({
        next: (orders: Order[]) => {
          this.orders = orders;
        }
      });
    }
    this.getService.getData<Commentary[]>("product/" + this.gameService.getSelectedGameId() + "/comments").subscribe({
      next: (value: Commentary[]) => {
        this.commentaries = value;
        this.setRating();
      }
    });

    const gameId = this.gameService.getSelectedGameId();
    this.currentWindowWidth = window.innerWidth;
    if (gameId) {
      this.gameService.getGameById(gameId).subscribe({
        next: (gameDetail: GameDetail) => {
          this.game = gameDetail;

          this.fileService.getFile(this.game.image).subscribe({
            next: (res:Blob) => this.image = URL.createObjectURL(res)
          })
          this.getService.getData<GameDetail>(`product/game/${gameId}`).subscribe({
            next: (res: GameDetail) => {
              this.game = res;
              if (this.authService.isAuth.value) {
                this.getService.getData<CustomerLike[]>(`customer/me/favs`).subscribe({
                  next: (favoriteItems: CustomerLike[]) => {
                    this.isGameLiked = favoriteItems.some(gameLike => gameLike.gameId === gameId);
                  },
                });
              }
            },
          });
        }
      })
    }
  }

  @HostListener('window:resize')
  onResize() {
    this!.currentWindowWidth = window.innerWidth;
  }

  more() {
    this.input = !this.input;
  }


  addToCart() {
    const result = this.cartService.addItem(this.game!);
    if (!result.success) {
      this.toastrService.error(result.message)
    } else {
      this.toastrService.success(result.message)
      this.router.navigate(['/']);
    }
  }


  addToFavorites(game: Game): void {
    this.isGameLiked = true;
    let gameId: AddGameToCustomerFavDTO = {
      id: game.gameId
    }

    this.customerService.addToFavorites(gameId).subscribe({
      next: () => this.toastrService.success("Le jeu à été ajouter avec succès"),
      error: () => this.toastrService.error("erreur lors de l'ajout au favoris")
    });
  }

  removeToFavorites(game: Game): void {
    this.isGameLiked = false;
    let gameId: AddGameToCustomerFavDTO = {
      id: game.gameId
    }
    this.customerService.removeToFavorites(gameId).subscribe({
      next: () => this.toastrService.success("Le jeu à été supprimé de vos favoris avec succès"),
      error: () => this.toastrService.error("erreur lors de la suppression")
    });
  }

  checkAlreadyCommented(): boolean {
    if (!this.authService.isAuth.value) {
      return false;
    }
    for (const commentary of this.commentaries) {
      if (commentary.customer.email === sessionStorage.getItem('subject') || commentary.customer.email === localStorage.getItem('subject')) {
        return true;
      }
    }
    return false;
  }

  checkIfOrdered(): boolean {
    for (const order of this.orders) {
      for (const game of order.games) {
        if (game.gameId == this.game.gameId) {
          return true;
        }
      }
    }
    return false;
  }

  setRating() {
    let sum: number = 0
    let nbRating: number = 0;
    for (const commentary of this.commentaries) {
      if (commentary.rating !== null) {
        sum += commentary.rating;
        nbRating++;
      }
    }
    this.rating = sum / nbRating;
    this.nbRating = nbRating;
  }

  isConnected(): boolean {
    return this.authService.isAuth.value;
  }
}


