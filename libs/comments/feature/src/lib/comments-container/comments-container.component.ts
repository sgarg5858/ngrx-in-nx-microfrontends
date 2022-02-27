import { Component, OnInit } from '@angular/core';
import { CommentsFacade } from '@ngrx-in-nx-mfe/comments/data-access';

@Component({
  selector: 'ngrx-in-nx-mfe-comments-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.scss']
})
export class CommentsContainerComponent implements OnInit {

  constructor(public commentsFacade:CommentsFacade) { }

  ngOnInit(): void {
    this.commentsFacade.loadComments();
  }

}
