import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../components/typings/interfaces';
import { Observable, map } from 'rxjs';
import { Post } from '../components/post/postngrx/interface';

@Injectable({
  providedIn: 'root',
})
export class HttpclientService {
  constructor(private http: HttpClient) {}

  getPost(): Observable<any> {
    let url = `https://jsonplaceholder.typicode.com/posts`;
    return this.http.get(url);
  }
  deletePost(id: number): Observable<any> {
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    return this.http.delete(url);
  }
}
