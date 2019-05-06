import { Component, OnInit,Input } from '@angular/core';
import { CommonService } from '../../../../common/common.service';
import { ExamContentModel } from '../../../exam-content/exam.content.model';
import { toNumber } from '@amcharts/amcharts4/.internal/core/utils/Type';

@Component({
  selector: 'app-modal-exam',
  templateUrl: './modal-exam.component.html',
  styleUrls: ['./modal-exam.component.css']
})
export class ModalExamComponent implements OnInit {

  constructor(public commonService: CommonService) {}

  public result;
  public task_id : number;
  public check = true;
  public realtime : Date;

  getTaskId(){
    let temp = localStorage.getItem('task_id');
    this.task_id = toNumber(temp);
  }

  getExamContentResult(){
      this.commonService.get_result_task(this.task_id).then(res=>{
      this.result = res;
      let expiresIn: Date = new Date(res.expiresIn);
      let createdAt: Date = new Date(res.createdAt);
      this.realtime = new Date(expiresIn.getTime() - createdAt.getTime());
      this.realtime.getSeconds

    });

  }

  ngOnInit() {
    this.getTaskId();
    this.getExamContentResult();
  }

}
