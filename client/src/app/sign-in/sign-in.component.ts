import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  private password;
  private username;

  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {

  }

  showDashBoard(): void {
    this.router.navigate(['/dashboard']);
  }
  returnSignUp(): void {
    this.router.navigate(['/sign-up']);
  }

  signIn() {
    this.commonService.signIn(this.username, this.password).then(res => {
      console.log("res.access_toke:", res.access_token);
      if (res.access_token == null) this.returnSignUp();
      else {
        this.commonService.setToken(res.access_token);
        // else if (res.access_token == this.commonService.getToken()) 
        this.showDashBoard();
      }
    });

  }

}
