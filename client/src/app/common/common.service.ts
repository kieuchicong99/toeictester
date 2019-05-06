import { SignUp, Login, Profile } from '../signup/signUp.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Headers, Http } from '@angular/http';

@Injectable()
export class CommonService {
  public headers = new Headers({ 'Content-Type': 'application/json' });
  public add_subject = new Subject<String>();
  constructor(public http: Http) {

  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  clearToken() {
    localStorage.removeItem('token');
  }

  setTaskId(value: string){
    localStorage.setItem('task_id', value);
  }
  getTaskId():string{
    return localStorage.getItem('task_id');
  }
  clearTaskId() {
    localStorage.removeItem('task_id');
  }

  signUp(username: string, password: string, email: string, first_name: string, last_name: string): Promise<SignUp> {
    return this.http
      .post('/api/users', JSON.stringify({ username: username, password: password, first_name: first_name, last_name: last_name, email: email }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as SignUp)
      .catch();
  }


  signIn(username: string, password: string): Promise<Login> {
    return this.http
      .post('/api/login', JSON.stringify({ username: username, password: password }), { headers: this.headers })
      .toPromise()
      .then(res => {
        return res.json() as Login
      })
      .catch();

  }


  getAllUser() {
    return this.http.get('/api/get-all-user', {})
  }

  getProfile(): Promise<Profile> {
    let header = new Headers();
    header.append("Authorization", this.getToken());

    return this.http.get('/api/profile', {
      headers: header
    })
      .toPromise()
      .then(res => {
        return res.json().user as Profile;
      })
      .catch();

  }

  changeProfile(first_name: string, last_name: string, email: string, birthday: Date): Promise<Profile> {
    let header = new Headers();
    header.append("Authorization", this.getToken());

    return this.http.put('/api/profile', JSON.stringify({ first_name: first_name, last_name: last_name, email: email, birthday: birthday }), {
      headers: header
    })
      .toPromise()
      .then(res => {
        return res.json().user as Profile;
      })
      .catch();

  }

  // gửi yêu cầu làm bài thi

  createRequestDoExam(exam_id: number) {
    let header = new Headers();
    header.append("Authorization", this.getToken());

    return this.http.post('/api/tasks', { exam_id }, {
      headers: header
    })
      .toPromise()
      .then(res => {
        console.log(res.json());
        return res.json();
      })
      .catch();

  }

  // lấy kết quả bài thi
  get_result_task(task_id: number) {

    let header = new Headers();
    header.append("Authorization", this.getToken());

    return this.http.get("/api/tasks/"+ task_id, {
      headers: header
    })
      .toPromise()
      .then(res => {
        return res.json();
      })
      .catch();
  }

  get_list_subjects() {
    let header = new Headers();
    header.append("Authorization", this.getToken());

    return this.http.get('/api/subjects', {
      headers: header
    })
      .toPromise()
      .then(res => {
        // console.log(res.json());
        return res.json();
      })
      .catch();
  }


  get_list_exam(subject_id) {

    let header = new Headers();
    header.append("Authorization", this.getToken());

    return this.http.get('/api/subjects/' + subject_id, {
      headers: header
    })
      .toPromise()
      .then(res => {
        // console.log(res.json)
        return res.json();
      })
      .catch();
  }



  submitExam(task_id: number) {
    let header = new Headers();
    header.append("Authorization", this.getToken());
    return this.http.delete('/api/tasks/' + task_id,{
      headers: header
    })
    .toPromise()
    .then(res => {
        console.log(res.json())
        return res.json();
      })
    .catch();


  }

  sendOneAnswer(question_id: number, answer_id: number, task_id: number) {
    let header = new Headers();
    header.append("Authorization", this.getToken());
    let url = "/api/tasks/"+ task_id;
    this.http.put(url, { question_id, answer_id }, {
      headers: header
    })
      .toPromise()
      .then(
        res => {
          return res.json()
        })
      .catch()
  }


  getExamedOfTopicList() {

  }


  getExamContentResult() {

    let header = new Headers();
    header.append("Authorization", this.getToken());

    return this.http.get("/api/tasks/", {
      headers: header
    })
      .toPromise()
      .then(res => {
        return res.json();
      })
      .catch();
  }
}
