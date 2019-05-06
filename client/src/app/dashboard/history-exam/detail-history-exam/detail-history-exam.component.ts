import { CommonService } from '../../../common/common.service';
import { Component, OnInit, Input } from '@angular/core';
import { ExamContentModel } from '../../exam-content/exam.content.model';
import { toNumber } from '@amcharts/amcharts4/.internal/core/utils/Type';


@Component({
  selector: 'app-detail-history-exam',
  templateUrl: './detail-history-exam.component.html',
  styleUrls: ['./detail-history-exam.component.css']
})
export class DetailHistoryExamComponent implements OnInit {


  constructor(public commonService: CommonService) { }

  @Input() task_id;
  show: boolean = true;

  setTaskId() {
    this.commonService.setTaskId(this.task_id);
  }

  ngOnInit() {

  }

}
