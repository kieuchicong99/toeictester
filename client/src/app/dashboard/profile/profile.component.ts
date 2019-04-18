import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  public profile;
  constructor(private commonServices: CommonService, private http: Http) { }

  getProfile() {
    this.commonServices.getProfile().then(res => {
      this.profile = res;
    });
  }
  changeProfile() {
    this.commonServices.changeProfile("", "", "", new Date(1, 1, 1, 1, 1, 1, 1)).then(res => {
    })
  }

  ngOnInit() {
    this.getProfile();
  }


}
