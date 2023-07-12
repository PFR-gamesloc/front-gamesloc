import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit{
    @Input() control: AbstractControl | null = null;
    @Input() errors: ValidationErrors | null |undefined = null;
    errorMessage: string = '';

    ngOnInit(): void {

        if(this.errors){
          if(this.errors['required']){
            this.errorMessage = "Champ requis";
          }
          if(this.errors['minlength']){
            this.errorMessage = " Champs trop court"
          }
          if(this.errors['pattern']){
            this.errorMessage = "Format incorrect"
          }
        }
    }
} 
