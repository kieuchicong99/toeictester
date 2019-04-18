import { Component, OnInit,Input } from '@angular/core';
import { CommonService } from '../../../common/common.service';
import { ExamContentModel } from '../../../exam-content/exam.content.model';

@Component({
  selector: 'app-modal-exam',
  templateUrl: './modal-exam.component.html',
  styleUrls: ['./modal-exam.component.css']
})
export class ModalExamComponent implements OnInit {

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
