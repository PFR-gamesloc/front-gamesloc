import { Component, Input } from '@angular/core';
import {Commentary} from "../../entities/Commentary";
import {GetService} from "../../../../core/http/get.service";

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.scss']
})
export class CommentaryComponent {
  @Input() commentaries!: Commentary[];
  @Input() gameId!:number;

  constructor(private getService:GetService) {
  }
  ngOnInit():void{

  }
}
