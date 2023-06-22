import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-component',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponentComponent {
  @Input() textBtn: string | undefined; 
  @Input() classBtn: string | undefined; 
}
