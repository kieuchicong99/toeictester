import { CommonService } from './../../../common/common.service';
import { Component, OnInit, Input } from '@angular/core';
import { ExamList } from './list-view.model';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  constructor(private commonService: CommonService) {}
  getExamOfTopic(){
    this. examList = this.commonService.getExamsOfTopicList();
  }

  @Input() examList : Array<ExamList> ;

  ngOnInit() {
    this.getExamOfTopic();
  }

}
