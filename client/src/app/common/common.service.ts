import { SignUp } from '../signup/signUp.model';
import { Injectable } from '@angular/core';
// import { SignUp } from '../signup/signup.component';
import { Subject } from 'rxjs/Subject';
import {Headers, Http } from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class CommonService {
	private headers = new Headers({'Content-Type': 'application/json'});
	public add_subject=new Subject<String>();
	constructor(private http : Http){

	}

	signUp(name: string, password: string, email: string, confirmPass: string): Promise<SignUp>{
		return this.http
		.post('/api/sign-up', JSON.stringify({ name: name, password: password, email: email}), {headers: this.headers})
		.toPromise()
		.then(res =>res.json().data as SignUp)
		.catch();
	}

	signIn(email: string,password: string): Promise<SignUp>{
		return this.http
		.post('/api/sign-in', JSON.stringify({ email: email, password: password}),{headers: this.headers})
		.toPromise()
		.then(res =>res.json().data as SignUp)
		.catch();
		
	}
	
	public userList: SignUp[]
	
	getAllUser(){
		return this.http.get('/api/get-all-user',{})
	}
}