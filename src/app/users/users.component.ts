import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

interface IUser{
  id:number;
  name:string;
  username:string;
  email:string;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: IUser[] =[];
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUser().subscribe((user)=>{
      this.user=user;
    });
  }

}
