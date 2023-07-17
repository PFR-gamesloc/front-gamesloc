import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription-page',
  templateUrl: './inscription-page.component.html',
  styleUrls: ['./inscription-page.component.scss']
})
export class InscriptionPageComponent implements OnInit {

  nameRegex!: RegExp;
  emailRegex!: RegExp;
  phoneNumberRegex!: RegExp;
  passwordRegex!: RegExp;
  addressRegex!: RegExp;

  public form!: FormGroup;

  ngOnInit(): void {

    this.nameRegex = /^[a-zA-Zàáâäãåçèéêëìíîïñòóôöõøùúûüýÿ'\-\s]{2,}$/;
    this.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.phoneNumberRegex = /^[0-9]{10}$/;
    this.passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    this.addressRegex = /^\d+\s[a-zA-Z\s]+$/

    this.form = new FormGroup({
      lastname: new FormControl('', [Validators.required, Validators.pattern(this.nameRegex)]),
      firstname: new FormControl('', [Validators.required, Validators.pattern(this.nameRegex)]),
      password: new FormControl('', [Validators.required, Validators.pattern(this.passwordRegex)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
      phoneNumber: new FormControl('', Validators.pattern(this.phoneNumberRegex)),
      address: new FormControl('', Validators.pattern(this.addressRegex)),
    });

  }

  get lastname() {
    return this.form.get('lastname');
  }

  public submit(): void {
    console.log(this.form.controls['phoneNumber'])
    console.log(this.form.controls['errors'])
  }
}
