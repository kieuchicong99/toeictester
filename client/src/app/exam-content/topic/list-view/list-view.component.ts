import { CommonService } from './../../../common/common.service';
import { Component, OnInit, Input } from '@angular/core';
import { ExamList } from './list-view.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  constructor(private commonService: CommonService , private router: Router) {}
  @Input() examList : Array<ExamList> ;
  getExamOfTopic(){
    this.examList = this.commonService.getExamsOfTopicList();
  }



  ngOnInit() {
    this.getExamOfTopic();
  }

  showExamView():void{
    this.router.navigate(['/dashboard/view-id-exam'])
  }

}
