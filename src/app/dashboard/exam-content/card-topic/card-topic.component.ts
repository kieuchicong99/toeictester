import { CommonService } from '../../../common/common.service';
import { Topic, TopicList } from './topic.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-topic',
  templateUrl: './card-topic.component.html',
  styleUrls: ['./card-topic.component.css']
})
export class CardTopicComponent implements OnInit {

   @Input() topic: Topic;

  constructor(public commonService: CommonService) { }

  ngOnInit() {
  }

}
