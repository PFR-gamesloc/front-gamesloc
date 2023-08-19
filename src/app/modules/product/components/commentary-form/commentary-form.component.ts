import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CommentToPost} from "../../entities/CommentToPost";
import {CustomerService} from "../../../../core/http/customer.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-commentary-form',
  templateUrl: './commentary-form.component.html',
  styleUrls: ['./commentary-form.component.scss']
})
export class CommentaryFormComponent {
  commentaryForm!: FormGroup;
  @Input() gameId!:number;

  constructor(private customerService:CustomerService,
              private toastr: ToastrService,
              private router: Router) {
  }
  ngOnInit(){
    this.commentaryForm = new FormGroup({
      comment:new FormControl(""),
      rating: new FormControl("")
    });
  }

  PostComment() {
    const commentToPost:CommentToPost = {
      gameId:this.gameId,
      comment: this.commentaryForm.get('comment')?.value,
      rating:this.commentaryForm.get('rating')?.value,
    };
    this.customerService.postAComment(commentToPost).subscribe({
      next:() => {
        this.toastr.success("Commentaire Posté !");
        this.router.navigate(["/"]);
      },
      error: () => this.toastr.error("Le commentaire n'a pas pu être posté")
    });
  }
}
