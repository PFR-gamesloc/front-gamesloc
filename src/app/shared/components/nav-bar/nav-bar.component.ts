import { Component } from '@angular/core';
// import { faCoffee } from '@fortawesome/'; 

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  textBtn: string = 'Connexion'; 
  classBtn: string = 'btn btn-log'; 
  // faCoffee = faCoffee; 
}