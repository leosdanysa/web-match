import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};
  logging: boolean;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  login(): void {
    this.loginService.login(this.user.username, this.user.password).subscribe(result => {
      if (result) {
        this.router.navigate(['/home']);
      } else {
        // Show error message
      }
    });
  }

}
