import { Component, Input } from '@angular/core';
import {FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent {
  @Input() forInput: string;
  @Input() textLabel: string | undefined;
  @Input() typeInput: string | undefined;
  @Input() placeholderInput: string | undefined;

  showPassword: boolean =  true;

  form!: FormGroup;
  constructor(private rootFormGroup : FormGroupDirective) {
    this.forInput = '';
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit(){
    this.form = this.rootFormGroup.control;
  }

  get errors(){
    return this.form.get(this.forInput)?.errors;
  }

  checkValidity(){
    return (this.form.get(this.forInput)?.invalid && (this.form.get(this.forInput)?.touched || this.form.get(this.forInput)?.dirty));
  }
}

