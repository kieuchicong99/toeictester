import { Component, OnInit } from '@angular/core';
import { ExamContentModel } from '../exam.content.model';
import { CommonService } from '../../../common/common.service';

@Component({
  selector: 'app-exam-view',
  templateUrl: './exam-view.component.html',
  styleUrls: ['./exam-view.component.css']
})
export class ExamViewComponent implements OnInit {
  constructor(private commonService: CommonService){}

  timeLeft: number = 10;
  interval;
  show: boolean = true;
  public status = "chưa nộp bài";
  showAlert(){
    alert("Hết giờ làm bài\nBài thi của bạn đã tự động được submit")
  }
  changeStatus(){
    this.show = false;
    this.status  = "đã nộp bài";
  }
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.clearSessionExamToken();
        this.showAlert();
        clearInterval(this.interval);
        this.changeStatus();
      }
    }, 1000)
  }

  public examcontent: ExamContentModel = {
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
  
  getSessionExamToken(): string {
    return localStorage.getItem('exam_token');
  }

  setSessionExamToken(token: string): void {
    sessionStorage.setItem('exam_token', token);
  }

  clearSessionExamToken(){
    localStorage.removeItem('exam_token');
  }

  submit(){
    this.changeStatus();
    this.commonService.submitExam();
  }
  

  ngOnInit() {
    this.setSessionExamToken("11111111111111111111");
    this.startTimer();
  //   if(this.show == false)this.showAlert();
  //   if (this.timeLeft <= 0) {
      
  //     clearInterval(this.interval);
  //   }
  //   else {
      
  //   }
  }

}
