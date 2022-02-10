import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

interface IUser{
  id:number;
  name:string;
  username:string;
  email:string;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient ) {}
    getAllUser(): Observable<any> {
      const user = this.http.get('https://jsonplaceholder.typicode.com/users').pipe();
      return user;
    } 
}
