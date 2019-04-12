import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../../../common/common.service';
import { Router } from '@angular/router';
import { ExamedList } from '../list-view/list-view.model';

@Component({
  selector: 'app-list-view-examed',
  templateUrl: './list-view-examed.component.html',
  styleUrls: ['./list-view-examed.component.css']
})
export class ListViewExamedComponent implements OnInit {

  constructor(private commonService: CommonService , private router: Router) { }

  public examedList: Array<ExamedList> ;
  @Input() name:string;

  getExamedOfTopic(){
    this.examedList = this.commonService.getExamedOfTopicList();
  }
  showHistoryViewOfExamed():void{
    this.router.navigate(['/dashboard/view-id-examed'])
  }

  ngOnInit() {
    this.getExamedOfTopic();
  }

}
