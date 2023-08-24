import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home-test',
  templateUrl: './home-test.component.html',
  styleUrls: ['./home-test.component.scss']
})
export class HomeTestComponent {
  formgroup = new FormGroup({
    lastname :new FormControl('', [Validators.minLength(10), Validators.required,Validators.maxLength(25)])
  });
}
