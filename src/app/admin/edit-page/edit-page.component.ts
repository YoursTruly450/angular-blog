import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Post } from 'src/app/shared/interfaces';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  id: string;
  author: string;
  submitted = false;
  uSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
    //   this.postService.getPostById(params['id']);
    // })
    this.route.params
      .pipe(switchMap((params: Params) => {
          return this.postService.getPostById(params['id']);
        })
      ).subscribe((post: Post) => {
        this.form = new FormGroup({
          title: new FormControl(post.title, Validators.required),
          text: new FormControl(post.text, Validators.required),
        });
        this.author = post.author;
        this.id = post.id;
      })
  }

  ngOnDestroy(): void {
    if (this.uSub) {
      this.uSub.unsubscribe();
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const post: Post = {
      id: this.id,
      title: this.form.value.title,
      text: this.form.value.text,
      author: this.author,
      date: new Date()
    }

    this.submitted = true;
    this.uSub = this.postService.update(post).subscribe(() => {
      this.submitted = false;
    })
  }

}
