import { SignUp } from './signUp.model';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service'

@Component({
	selector: 'sign-up',
	templateUrl: './signUp.component.html',
	styleUrls: ['./signUp.component.css']

})
export class SignUpComponent implements OnInit {

	private name;
	private password;
	private email;
	private confirmPass;


	constructor(private commonService:CommonService) {

	}
	confirmPassWord(password, confirmPass){
		if(password===confirmPass)
		return true;
	}
	
	signUp(){					
		this.commonService.signUp(this.name, this.password, this.email, this.confirmPass)
		this.name = 'default';
		this.password = "default";
		this.email 	  = "default";
		this.confirmPass ="default";
	}

	ngOnInit() {

	}
}
