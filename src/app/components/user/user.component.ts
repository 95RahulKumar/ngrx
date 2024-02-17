import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpclientService } from 'src/app/services/httpclient.service';
import { IUser } from '../typings/interfaces';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { Movie, addMovie, getMovie } from 'src/app/actions';
import { MovieState } from 'src/app/reducer/movie-reducer';
import { fetchApiAction } from '../post/postngrx/action';
import { selectFetchSelectorSucess } from '../post/postngrx/selector';
import { Post } from '../post/postngrx/interface';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  constructor(
    private http: HttpclientService,
    private store: Store<MovieState>
  ) {}

  private subs = new SubSink();
  postList$: Observable<Post[]>;
  Movie: Array<Movie> = [];
  movies$ = this.store.select('movies');
  ngOnInit(): void {
    // with the help of store we can dispatch the action
    // this.store.dispatch(fetchApiAction.fetchPost());
    this.subs.sink = this.store
      .pipe(select(selectFetchSelectorSucess))
      .subscribe((res) => {
        console.log(res, 'posts in user component...');
      });
    this.fetch();
  }

  addMovie() {
    let movie = {
      name: 'tere name',
      releaseDate: '1997',
      earning: '5Cr',
    };
    this.store.dispatch(addMovie(movie));
  }
  fetch() {
    this.store.dispatch(getMovie());
    // const getIsLoading$ = this.store.select(getloading);
    // const getIsLoaded$ = this.store.select(getloaded);
    // const users$ = this.store.select(getUsers);
    // // Combine latest observables
    // combineLatest([getIsLoading$, getIsLoaded$, users$]).subscribe(
    //   ([isLoading, isLoaded, users]) => {
    //     if (!isLoading && !isLoaded && users.length === 0) {
    //       // If state is initial and no users are loaded, call the API
    //       this.store.dispatch(new userListRequestAction());
    //       this.http.getUser().subscribe((res) => {
    //         this.store.dispatch(new userListSucessAction({ data: res }));
    //       });
    //     } else {
    //       users$.subscribe((res: any) => {
    //         console.log('---===', res);
    //         this.UserrData = res;
    //       });
    //     }
    //   }
    // );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
