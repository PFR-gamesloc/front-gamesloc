import { Component, Input } from '@angular/core';
import {Commentary} from "../../entities/Commentary";

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.scss']
})
export class CommentaryComponent {
  @Input() commentaries!: Commentary[];
  @Input() gameId!:number;

}
