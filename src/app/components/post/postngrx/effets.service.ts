import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, switchMap, Observable } from 'rxjs';
import { HttpclientService } from 'src/app/services/httpclient.service';
import { fetchApiAction } from './action';
import { pipe } from 'rxjs';
import { Post } from './interface';

@Injectable({
  providedIn: 'root',
})
export class PostEffets {
  constructor(private actions: Actions, private http: HttpclientService) {}

  fetchMovie$ = createEffect((): any =>
    this.actions.pipe(
      ofType(fetchApiAction.fetchPost),
      switchMap(() =>
        this.http.getPost().pipe(
          map((data) => {
            return fetchApiAction.fetchPostSucess({ posts: data });
          }),
          catchError((error): any => {
            console.log('http error response...');
            return of(fetchApiAction.fetchPostFailure({ error: error }));
          })
        )
      )
    )
  );

  $deletepost = createEffect((): Observable<any> => {
    return this.actions.pipe(
      ofType(fetchApiAction.deletePost),
      switchMap((data) => {
        return this.http.deletePost(data.post.id).pipe(
          map((msg) => {
            return fetchApiAction.deletePostSucess({ message: 'deleted post' });
          }),

          catchError((error) => {
            return of(fetchApiAction.deletePostFailure({ error }));
          })
        );
      })
    );
  });
}
