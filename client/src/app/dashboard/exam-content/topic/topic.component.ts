import { CommonService } from '../../../common/common.service';
import { Component, OnInit } from '@angular/core';
import { TopicList } from '../card-topic/topic.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  constructor(public router: Router,public commonService: CommonService) { }

  public subjects ;
  getTopic(){
    // this.topicList = this.commonService.getTopicList();
    this.commonService.get_list_subjects().then(res=>{
      this.subjects = res;
      console.log(this.subjects);
    })
  
  }
  public topicList : TopicList;

  ngOnInit() {
    this.getTopic();
  }
  backHome(): void {
    this.router.navigate(['/home']);

  }

}
