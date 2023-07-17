<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
=======
import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective} from "@angular/forms";

>>>>>>> feat_select_autocomplete

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
<<<<<<< HEAD
  @Input() regex: RegExp | undefined;

=======
>>>>>>> feat_select_autocomplete
  form!: FormGroup;
  constructor(private rootFormGroup : FormGroupDirective) {
    this.forInput = '';
  }

  ngOnInit(){
    this.form = this.rootFormGroup.control;
  }
<<<<<<< HEAD

  get errors(){
    return this.form.get(this.forInput)?.errors;
  }

  checkValidity(){
=======
  checkValidity(){
    console.log(this.form.get(this.forInput)?.errors);
>>>>>>> feat_select_autocomplete
    return (this.form.get(this.forInput)?.invalid && (this.form.get(this.forInput)?.touched || this.form.get(this.forInput)?.dirty));
  }

}
