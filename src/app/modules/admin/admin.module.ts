import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardPageComponent } from './pages/admin-dashbord-page/admin-dashboard-page.component';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapBagCheckFill, bootstrapCardList, bootstrapPeopleFill, bootstrapX, bootstrapPenFill, bootstrapPlusSquare } from '@ng-icons/bootstrap-icons';
import { LocatedGamesComponent } from './pages/located-games/located-games.component';
import { AllTheGamesComponent } from './pages/all-the-games/all-the-games.component';
import { AllTheUsersComponent } from './pages/all-the-users/all-the-users.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableComponentComponent } from './components/table-component/table-component.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { GameEditComponent } from './pages/game-edit/game-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminItemComponent } from './components/admin-item/admin-item.component';

@NgModule({
  declarations: [
    AdminDashboardPageComponent,
    NavbarComponent,
    LocatedGamesComponent,
    AllTheGamesComponent,
    AllTheUsersComponent,
    TableComponentComponent,
    GameEditComponent,
    AdminItemComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule,
    NgIconsModule.withIcons({ bootstrapBagCheckFill, bootstrapCardList, bootstrapPeopleFill, bootstrapX, bootstrapPenFill, bootstrapPlusSquare }),
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    ReactiveFormsModule, 
    MatCheckboxModule, 
    MatRadioModule
  ],
})
export class AdminModule { }
