import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss']
})
export class ConnexionPageComponent {

  public formGroup:FormGroup = new FormGroup({
    mail: new FormControl(''),
    password: new FormControl('')
  });
}
