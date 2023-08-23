import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import {regex} from "../../../../../environments/regex";

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent{
  @Input() control: AbstractControl | null = null;
  @Input() errors: ValidationErrors | null |undefined = null;
  errorMessage: string = '';

  ngOnChanges(): void {

    if(this.errors){
      if(this.errors['required']){
        this.errorMessage = "Champ requis";
      }
      if(this.errors['minlength']){
        this.errorMessage = " Champs trop court"
      }
      if(this.errors['passwordMismatch']){
        this.errorMessage = " Les mots de passes doivent être identiques"
      }
      if(this.errors['pattern']){
        this.errorMessage = "Format incorrect"
        switch(this.errors['pattern'].requiredPattern) {
          case regex.nameRegex.toString(): {
            this.errorMessage = 'Veuillez saisir un nom/prénom avec au moins 2 caractères, comportant uniquement des lettres'
            break;
          }
          case regex.emailRegex.toString(): {
            this.errorMessage = 'Veuillez saisir une adresse email valide'
            break;
          }
          case regex.phoneNumberRegex.toString(): {
            this.errorMessage = 'Veuillez saisir un numéro de téléphone de 10 chiffres'
            break;
          }
          case regex.passwordRegex.toString(): {
            this.errorMessage = 'Veuillez saisir un mot de passe d\'au moins 8 caractères avec au moins une majuscule, une minuscule et un caractère spécial(#=@$!%?&^*,;_-)'
            break;
          }

          case regex.complementaryNumberRegex.toString(): {
            this.errorMessage = 'la valeur peut être uniquement BIS/TER/QUARTER'
            break;
          }
          default: {
            this.errorMessage = 'Format incorrect'
            break;
          }
        }
      }
    }
  }
}
