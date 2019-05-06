import { CommonService } from '../../../../common/common.service';
import { Component, OnInit, Input } from '@angular/core';
import { ExamList } from './list-view.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  constructor(public commonService: CommonService , public router: Router) {}
  // @Input() examList : Array<ExamList> ;
  @Input()examList;
  @Input() subject_id;
  getExamOfTopic(){
    // this.examList = this.commonService.getExamsOfTopicList();

    this.commonService.get_list_exam(this.subject_id).then(res=>{
      this.examList = res.data;
      console.log("res",res)
    });
  }


  ngOnInit() {
    this.getExamOfTopic();
  }

  storeExamId(exam_id){
    localStorage.setItem('exam_id', exam_id);
  }

  getExamId(){
    localStorage.getItem('exam_id');
  }
  
  showExamView():void{
    this.router.navigate(['/dashboard/view-id-exam'])
  }

}
