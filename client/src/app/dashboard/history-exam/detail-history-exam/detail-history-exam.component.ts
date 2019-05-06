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
  public result;

  setTaskId() {
    this.commonService.clearTaskId();
    this.commonService.setTaskId(this.task_id);

  }

  getTaskId() {
    let temp = localStorage.getItem('task_id');
    this.task_id = toNumber(temp);
  }

  getExamContentResult() {
    console.log("this.task_id", this.task_id);
    this.commonService.get_result_task(this.task_id).then(res => {
      this.result = res;
    });
  }

  ngOnInit() {
    this.getExamContentResult();

  }

}
