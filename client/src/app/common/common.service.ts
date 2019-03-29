import { ExamContentModel } from './../exam-content/exam-content.model';
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

  public userList: SignUp[];
  public examcontent: ExamContentModel

	getAllUser(){
		return this.http.get('/api/get-all-user',{})
  }

  getExamContentResult(){
    this.examcontent = {
      id: "dasjdhasdksjkjbdsjk",
      time: 180,
      name: "SE-1",
      questions: [
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "1",
          choiceAnswer: [
            {
              opt: "A",
              content: "crowd",
              formtype: "String"
            },
            {
              opt: "B",
              content: "crowds",
              formtype: "String"
            },
            {
              opt: "C",
              content: "crowding",
              formtype: "String"
            },
            {
              opt: "D",
              content: "crowded",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "2",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "3",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "4",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "5",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "6",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "7",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "8",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "9",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "10",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "11",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "12",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "13",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "14",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        }


      ]

    };
    return this.examcontent;
  }
}
