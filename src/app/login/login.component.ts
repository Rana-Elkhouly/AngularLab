import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '../login-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})

export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  userModel:LoginUser=new LoginUser("","");
  pass:string="";
  show:boolean=false;
  ngOnInit(): void {
  }
  onSubmit()
  {
    const dataLogin= localStorage.getItem(this.userModel.email) as string;
    console.log(dataLogin);
    const userLogin=JSON.parse(dataLogin);
    console.log(userLogin);
    
    if(userLogin.password && userLogin.password == this.pass ){
      this.show = true;
      console.log('Hello');
      console.log(this.show)
      this.goPrev();
    }
    console.log(this.show)
  }
  showPass(event:any){
    this.pass=event.target.value;
  }
  goPrev()
  {
    this.router.navigate(["/users"]);
  }
}
