import { CommonService } from './../../common/common.service';
import { Component, OnInit, Input } from '@angular/core';
import { ExamContentModel } from '../../dashboard/exam-content/exam.content.model';


@Component({
  selector: 'app-detail-history-exam',
  templateUrl: './detail-history-exam.component.html',
  styleUrls: ['./detail-history-exam.component.css']
})
export class DetailHistoryExamComponent implements OnInit {

  constructor(private commonService: CommonService) {}
  // lay ket qua noi dung bai thi

  getExamContentResult(){
    this.exam_content = this.commonService.getExamContentResult();
  }


  @Input() exam_content : ExamContentModel ;

  ngOnInit() {
    this.getExamContentResult();
  }

  }

