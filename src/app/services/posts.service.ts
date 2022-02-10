import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
interface IPosts{
  id:number;
  title:string;
  body:string;
}
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
  getAllPosts(): Observable<any> {
    const post = this.http.get('https://jsonplaceholder.typicode.com/posts').pipe();
    return post;
  }
  getSinPost(id:number): Observable<IPosts[]> {
    const post =this.http.get<IPosts[]>(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe();
    return post;
  }
  getComments(postid:number): Observable<IPosts[]> {
    const comment =this.http.get<IPosts[]>(`https://jsonplaceholder.typicode.com/posts/${postid}/comments`).pipe();
    return comment;
  }
}
