import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/interfaces';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  pSub: Subscription;
  dSub: Subscription;
  searchStr = '';

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }

  getAllPosts() {
    this.pSub = this.postService.getAll().subscribe(
      (response) => {
        this.posts = response;
      }
    );
  }

  remove(id: string) {
    this.dSub = this.postService.remove(id)
      .subscribe((res) => {
        this.posts = this.posts.filter((post) => post.id !== id);
      })
  }

}
