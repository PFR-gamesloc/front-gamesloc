import { Component, Input } from '@angular/core';

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

  toggleShow() {
    this.showPassword = !this.showPassword; 
  }
}
