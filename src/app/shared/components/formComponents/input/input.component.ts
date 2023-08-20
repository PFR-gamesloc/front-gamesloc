
import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit{
  @Input() forInput: string ;
  @Input() textLabel: string | undefined;
  @Input() typeInput: string | undefined;
  @Input() placeholderInput: string | undefined;
  @Input() regex: RegExp | undefined;
  @Input() readonly: boolean = false; 
  @Input() isTextArea: boolean = false; 

  form!: FormGroup;
  constructor(private rootFormGroup : FormGroupDirective) {
    this.forInput = '';
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
