import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http:HttpClient) { }
  _url="http://localhost:4000/register";

   register(user:User)
   {
     return this.http.post(this._url,user);
   }
}
