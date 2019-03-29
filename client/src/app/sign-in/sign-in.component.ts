import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service'
import { SignUp } from '../signup/signUp.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  private password;
  private email;

  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {

  }
 
  showDashBoard(): void {
    this.router.navigate(['/dashboard']);
  }
  returnSignUp(): void{
    this.router.navigate(['/sign-up']);
  }

  signIn() {
    this.commonService.signIn(this.email, this.password).then(res => {
      if(res === undefined )this.returnSignUp();
      else if (res.email === this.email && res.password === this.password)
        this.showDashBoard();

    });

  }

}
