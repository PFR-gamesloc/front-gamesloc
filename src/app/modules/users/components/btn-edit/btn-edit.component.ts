import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-edit',
  templateUrl: './btn-edit.component.html',
  styleUrls: ['./btn-edit.component.scss']
})
export class BtnEditComponent {
  @Input() pathInfo: string | any[] | null | undefined;
}
