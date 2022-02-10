import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUserService } from '../register-user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private registerService: RegisterUserService,
    private router: Router
  ) {}
  socials = ['FaceBook', 'Instagram', 'Twitter'];
  userModel: User = new User('', '', '', '', '');
  pattern = new RegExp('');
  ngOnInit(): void {}
  onSubmit() {
    console.log(this.userModel);
    this.registerService.register(this.userModel).subscribe((res: any) => {
      console.log('success', res);
      localStorage.setItem(res.email, JSON.stringify(res));
    });
  }
  checkPassword(event: any) {
    this.pattern = event.target.value;
  }
  goPrev() {
    this.router.navigate(['/login']);
  }
}
