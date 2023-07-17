import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss']
})
export class ConnexionPageComponent {
<<<<<<< HEAD:src/app/modules/users/pages/connexion-page/connexion-page.component.ts
  
=======
  public formGroup:FormGroup = new FormGroup({
    mail: new FormControl(''),
    password: new FormControl('')
  });
>>>>>>> feat_select_autocomplete:src/app/modules/auth/pages/connexion-page/connexion-page.component.ts
}
