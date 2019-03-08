import { SignUp } from './signUp.model';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service'
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
	private errorState;
	private errorPas = "Mật khẩu phải dài tối thiểu 8 kí tự";
	private sucessState;



	constructor(private commonService: CommonService, private router: Router) {

	}
	confirmPassWord(password, confirmPass) {
		if (password === confirmPass)
			return true;
	}
	setErrConfirm() {
		this.errorState = "Xác nhận mật khẩu không đúng";
	}
	setSuc() {
		this.sucessState = "Đăng ký tài khoản thành công"
	}
	setErrPas() {
		this.errorPas = "Kiểm tra lại độ dài mật khẩu"
	}
	checkPas() {
		if (this.password.length >= 8) return true
	}
	showDashBoard(): void {
		this.router.navigate(['/dashboard']);
	}


	signUp() {
		if (this.confirmPassWord(this.password, this.confirmPass) && this.checkPas()) {
			this.setSuc();
			this.errorPas = "";
			this.errorState = '';
			this.commonService.signUp(this.name, this.password, this.email, this.confirmPass);
			this.name = null;
			this.password = null;
			this.email = null;
			this.confirmPass = null;
			this.showDashBoard();
		}
		else if (this.checkPas() != true) {
			this.setErrPas();
		}
		else if (this.confirmPassWord(this.password, this.confirmPass) != true) {
			this.errorPas = "";
			this.setErrConfirm();

		}

	}

	ngOnInit() {

	}
}
