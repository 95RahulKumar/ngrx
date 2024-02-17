import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor(private store: Store) {}
  postList$: Observable<Post[]>;
  post: Post[] = [];
  ngOnInit(): void {
    this.store.dispatch(fetchApiAction.fetchPost());
    this.postList$ = this.store.pipe(select(selectFetchSelectorSucess));
    this.postList$.subscribe((res) => {
      this.post = res;
    });
    this.store.pipe(select(deleteSuccessselector)).subscribe((res) => {
      console.log(res);
    });
    this.store.pipe(select(deleteFailureselector)).subscribe((res) => {
      console.log(res);
    });
    this.store.pipe(select(deleteselector)).subscribe((res) => {
      console.log(res, 'deleted');
    });
  }

  deletUser(post: Post) {
    this.store.dispatch(fetchApiAction.deletePost({ post }));
    this.store.dispatch(fetchApiAction.fetchPost());
  }
}
