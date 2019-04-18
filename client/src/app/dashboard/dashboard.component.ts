import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private commonService: CommonService) { }

  logOut() {
    this.commonService.clearToken();
    this.backHome();
  }

  ngOnInit() {
    if (this.commonService.getToken() == null) {
      this.backHome();
      alert("Rất tiêc :((\nBạn chưa đăng nhập!!!");
    }
  }

  backHome(): void {
    this.router.navigate(['/home']);

  }
}



