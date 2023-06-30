import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() forInput: string | undefined;
  @Input() textLabel: string | undefined;
  @Input() typeInput: string | undefined;
  @Input() placeholderInput: string | undefined;
}
