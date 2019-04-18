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

  constructor(private router: Router,private commonService: CommonService) { }

  getTopic(){
    this.topicList = this.commonService.getTopicList();
  }
  public topicList : TopicList;

  ngOnInit() {
    this.getTopic();
  }
  backHome(): void {
    this.router.navigate(['/home']);

  }

}
