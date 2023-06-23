import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  textBtn: string = 'Connexion'; 
  classBtn: string = 'btn btn-log btn-dekstop';  
}