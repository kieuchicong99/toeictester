import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.css']
})
export class DatePipeComponent implements OnInit {
   public today: number;
   public time_count_down: number=30*1000*60;

  constructor() { }

  ngOnInit() {
    this.today = Date.now(); 
    let minutes = Math.floor((this.time_count_down % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((this.time_count_down % (1000 * 60)) / 1000);
  }

}
