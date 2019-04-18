import { SignUp } from './../signup/signUp.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

class Profile{
  
  
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  public profile = new SignUp("Kiều Chí Công","","kieuchicong99@gmail.com","active", "mod" );
  constructor() { }

  ngOnInit() {
  }
  

}
