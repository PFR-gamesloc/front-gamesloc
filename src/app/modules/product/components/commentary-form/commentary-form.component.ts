import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CommentToPost} from "../../entities/CommentToPost";
import {CustomerService} from "../../../../core/http/customer.service";

@Component({
  selector: 'app-commentary-form',
  templateUrl: './commentary-form.component.html',
  styleUrls: ['./commentary-form.component.scss']
})
export class CommentaryFormComponent {
  commentaryForm!: FormGroup;
  @Input() gameId!:number;

  constructor(private customerService:CustomerService) {
  }
  ngOnInit(){
    this.commentaryForm = new FormGroup({
      comment:new FormControl(""),
      rating: new FormControl("")
    });
  }

  PostComment() {
    console.log("ici")
    const commentToPost:CommentToPost = {
      gameId:this.gameId,
      comment: this.commentaryForm.get('comment')?.value,
      rating:this.commentaryForm.get('rating')?.value,
    };
    this.customerService.postAComment(commentToPost);
  }
}
