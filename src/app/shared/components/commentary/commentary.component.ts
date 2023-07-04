import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.scss']
})
export class CommentaryComponent {
  @Input() classCommentary: string | undefined;  
  @Input() nameCommentary: string | undefined;
  @Input() ratingCommentary: string | undefined;
  @Input() rating: string | undefined;
  @Input() ratingDate: string | undefined;
  @Input() contentCommentary : string | undefined;
}
