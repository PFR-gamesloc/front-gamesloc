import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-inscription-page',
  templateUrl: './inscription-page.component.html',
  styleUrls: ['./inscription-page.component.scss']
})
export class InscriptionPageComponent {
  public formGroup: FormGroup = new FormGroup({
    lastname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    firstname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    address: new FormControl(''),
  });
}
