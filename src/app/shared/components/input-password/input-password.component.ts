import { Component, Input } from '@angular/core';
import {FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent {
  @Input() forInput: string | undefined;
  @Input() textLabel: string | undefined;
  @Input() typeInput: string | undefined;
  @Input() placeholderInput: string | undefined;

  showPassword: boolean =  true;

  form!: FormGroup;

  constructor( private formgroup: FormGroupDirective) {
  }

  ngOnInit(){
    this.form = this.formgroup.control;
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }
}
