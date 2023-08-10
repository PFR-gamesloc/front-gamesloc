import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardPageComponent } from "./pages/admin-dashbord-page/admin-dashboard-page.component";
import { LocatedGamesComponent } from './pages/located-games/located-games.component';
import { AllTheGamesComponent } from './pages/all-the-games/all-the-games.component';
import { AllTheUsersComponent } from './pages/all-the-users/all-the-users.component';
import { GameEditComponent } from './pages/game-edit/game-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardPageComponent
  },
  {
    path: 'located-games',
    component: LocatedGamesComponent
  },
  {
    path: 'games',
    component: AllTheGamesComponent
  },
  {
    path: 'users',
    component: AllTheUsersComponent
  },
  {
    path: 'game/add',
    component: GameEditComponent
  },
  {
    path: 'game/edit/:id',
    component: GameEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
