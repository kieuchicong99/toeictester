import { SignUp } from '../signup/signUp.model';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service'

@Component({
	selector: 'user-list',
	templateUrl: './userlist.component.html',
	styleUrls: ['../../assets/bootstrap.min.css']
})
export class UserListComponent implements OnInit {

	public userList: SignUp[]

	constructor(private commonService: CommonService) {

	}
	getAllUser() {
		this.commonService.getAllUser().subscribe(res => {
			this.userList = []
			res.json().data.map(e => {
				this.userList.push(new SignUp(e.name, e.password, e.email, e.status, e.level));
			})
			console.log(this.userList);
		})
	}
	ngOnInit() {
		this.getAllUser()
	}
}