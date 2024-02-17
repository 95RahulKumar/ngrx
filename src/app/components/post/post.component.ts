import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './postngrx/interface';
import {
  deleteFailureselector,
  deleteSuccessselector,
  deleteselector,
  selectFetchPostSelector,
  selectFetchSelectorSucess,
} from './postngrx/selector';
import { fetchApiAction } from './postngrx/action';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}

  private subs = new SubSink();
  postList$: Observable<Post[]>;
  post: Post[] = [];
  ngOnInit(): void {
    this.store.dispatch(fetchApiAction.fetchPost());
    this.subs.sink = this.store
      .pipe(select(selectFetchSelectorSucess))
      .subscribe((res) => {
        this.post = res;
      });
    this.subs.sink = this.store
      .pipe(select(deleteSuccessselector))
      .subscribe((res) => {
        console.log(res);
      });
    this.subs.sink = this.store
      .pipe(select(deleteFailureselector))
      .subscribe((res) => {
        console.log(res);
      });
    this.subs.sink = this.store
      .pipe(select(deleteselector))
      .subscribe((res) => {
        console.log(res, 'deleted');
      });
  }

  deletUser(post: Post) {
    this.store.dispatch(fetchApiAction.deletePost({ post }));
    this.store.dispatch(fetchApiAction.fetchPost());
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
