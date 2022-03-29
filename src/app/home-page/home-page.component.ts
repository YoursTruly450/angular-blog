import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Post } from '../shared/interfaces';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  posts$: Observable<Post[]>;

  constructor(
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getAll();
  }

  ngOnDestroy(): void {}

}
