import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {InscriptionForm} from "../../../../shared/entities/inscriptionForm";
import {env} from "../../../../../env"
import {passwordMatchValidator} from "../../validators/PasswordMatchValidator";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-inscription-page',
  templateUrl: './inscription-page.component.html',
  styleUrls: ['./inscription-page.component.scss']
})
export class InscriptionPageComponent implements OnInit {

  public form!: FormGroup;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      lastname: new FormControl('', [Validators.required, Validators.pattern(env.nameRegex)]),
      firstname: new FormControl('', [Validators.required, Validators.pattern(env.nameRegex)]),
      password: new FormControl('', [Validators.required, Validators.pattern(env.passwordRegex)]),
      repeatPassword: new FormControl('', [Validators.required, passwordMatchValidator]),
      email: new FormControl('', [Validators.required, Validators.pattern(env.emailRegex)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(env.phoneNumberRegex)]),
      streetNumber: new FormControl('', [Validators.required, Validators.pattern(env.streetNumberRegex)]),
      complementaryNumber: new FormControl('', [Validators.pattern(env.complementaryNumberRegex)]),
      streetName: new FormControl('', [Validators.required, Validators.pattern(env.streetNameRegex)]),
      complementaryAddress: new FormControl(''),
      postalCode: new FormControl('', [Validators.required, Validators.pattern(env.postalCodeRegex)]),
      cityName: new FormControl('', [Validators.required, Validators.pattern(env.cityNameRegex)])
    }, {
      validators: passwordMatchValidator
    });

    this.form.get('firstname')?.valueChanges.subscribe(() => {
      this.formatFirstLetter('firstname');
    });
    this.form.get('lastname')?.valueChanges.subscribe(() => {
      this.formatFirstLetter('lastname');
    });

    this.form.get('postalCode')?.valueChanges.subscribe(() => {
      this.convertToUppercase('postalCode');
    });
    this.form.get('cityName')?.valueChanges.subscribe(() => {
      this.convertToUppercase('cityName');
    });
  }

  isFormValid(): boolean {
    return this.form.valid;
  }

  submit(): void {
    const inscriptionForm: InscriptionForm = {
      firstName: this.form.get('firstname')?.value,
      lastName: this.form.get('lastname')?.value,
      password: this.form.get('password')?.value,
      email: this.form.get('email')?.value,
      phoneNumber: this.form.get('phoneNumber')?.value,
      numberAddress: this.form.get('streetNumber')?.value,
      complementaryNumber: this.form.get('complementaryNumber')?.value,
      streetName: this.form.get('streetName')?.value,
      complementaryAddress: this.form.get('complementaryAddress')?.value,
      postalCode: this.form.get('postalCode')?.value,
      cityName: this.form.get('cityName')?.value
    };
    this.authService.createUser(inscriptionForm);
  }

  private formatFirstLetter(fieldToChange: string): void {
    const inputValue = this.form.get(fieldToChange)?.value;
    if (inputValue) {
      this.form.get(fieldToChange)?.setValue(inputValue.charAt(0).toUpperCase() + inputValue.slice(1), {emitEvent: false});
    }
  }

  private convertToUppercase(fieldToChange: string): void {
    const inputValue = this.form.get(fieldToChange)?.value;
    if (inputValue) {
      this.form.get(fieldToChange)?.setValue(inputValue.toUpperCase(), {emitEvent: false});
    }

  }
}
