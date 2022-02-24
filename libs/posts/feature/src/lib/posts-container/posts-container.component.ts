import { Component, OnInit } from '@angular/core';
import { PostsFacade } from '@ngrx-in-nx-mfe/posts/data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ngrx-in-nx-mfe-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss']
})
export class PostsContainerComponent implements OnInit {

  constructor(private postsFacade:PostsFacade) { }

  posts$= this.postsFacade.posts$;
  ngOnInit(): void {
    
    this.postsFacade.loadAllPosts();
  }

}
