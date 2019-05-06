import { ExamHistoryList } from './history-exam.model';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-exam',
  templateUrl: './history-exam.component.html',
  styleUrls: ['./history-exam.component.css']
})
export class HistoryExamComponent implements OnInit {


  public historyList;
  getHistoryList(){
    this.commonService.getExamContentResult().then(res=>{
      this.historyList = res;
    });

  }

  constructor(private commonService: CommonService, private router : Router) { }

  showHistory(): void {
    this.router.navigate(['/history/history-exam']);
  }

  ngOnInit() {
    this.getHistoryList();

  }

}
