import { Component, Input } from '@angular/core';
import { Btn } from '../../entities/btn';

@Component({
  selector: 'app-btn-component',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponentComponent {
  @Input() textBtn: string | undefined; 
  @Input() classBtn: string | undefined; 

  // @Input() data: Btn | undefined;
}
