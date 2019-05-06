import { Component, OnInit } from '@angular/core';
import { ExamContentModel } from '../exam.content.model';
import { CommonService } from '../../../common/common.service';
import { Router } from '@angular/router';
import { number } from '@amcharts/amcharts4/core';
import { toNumber } from '@amcharts/amcharts4/.internal/core/utils/Type';

@Component({
  selector: 'app-exam-view',
  templateUrl: './exam-view.component.html',
  styleUrls: ['./exam-view.component.css']
})
export class ExamViewComponent implements OnInit {
  constructor(private commonService: CommonService, private router: Router) { }

  timeLeft: number = 100;
  interval;
  show: boolean = true;
  public status = "chưa nộp bài";

  showAlert() {
    alert("Hết giờ làm bài\nBài thi của bạn đã tự động được submit")
  }

  changeStatus() {
    this.show = false;
    this.status = "đã nộp bài";
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
        this.changeToExamResult();
      }
    }, 1000)
  }

  public exam_id: number;
  public task_id: number;
  // public question_id: string;
  // public answer_id: string;
  public examcontent;


  storeTask_id(value: string){
    localStorage.setItem('task_id',value);
  }
  createRequestDoExam() {
    let temp = localStorage.getItem('exam_id');
    this.exam_id = toNumber(temp);
    this.commonService.createRequestDoExam(this.exam_id).then(res => {
      this.examcontent = res.data.exam;
      console.log(res.data.task_id);
      this.storeTask_id(res.data.task_id);
      this.task_id = toNumber(res.data.task_id);
      console.log("noi dung:", this.examcontent);
    })
  }

  sendOneAnswer(question_id: number, answer_id: number) {
    this.commonService.sendOneAnswer(question_id, answer_id, this.task_id)
    console.log("send one answer");
  }

  changeToExamResult(): void {
    this.router.navigate(['/dashboard/result-exam']);
  }


  getSessionExamToken(): string {
    return localStorage.getItem('exam_token');
  }

  setSessionExamToken(token: string): void {
    sessionStorage.setItem('exam_token', token);
  }

  clearSessionExamToken() {
    localStorage.removeItem('exam_token');
  }

  submit() {
    clearInterval(this.interval);
    this.changeStatus();
    this.commonService.submitExam(this.task_id).then(res=>{
      console.log(res);

    });
    this.changeToExamResult();
  }


  ngOnInit() {
    this.createRequestDoExam();
    this.setSessionExamToken("11111111111111111111");
    this.startTimer();
  }

}
