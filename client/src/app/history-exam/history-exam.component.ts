import { ExamHistoryList } from './history-exam.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-exam',
  templateUrl: './history-exam.component.html',
  styleUrls: ['./history-exam.component.css']
})
export class HistoryExamComponent implements OnInit {
  public historyList: ExamHistoryList = {
    total_exam: 120,
    type_exam: "đọc hiểu",
    exams: [
      { id: "baithiso1", type_exam: "đọc hiểu", time: 30, time_real: 30, name_exam: "bai thi so 1", point: 100, rank: 1, date: new Date(2019, 0, 31) },
      { id: "baithiso2", type_exam: "đọc hiểu", time: 30, time_real: 30, name_exam: "bai thi so 2", point: 70, rank: 5, date: new Date(2019, 1, 31) },
      { id: "baithiso3", type_exam: "đọc hiểu", time: 40, time_real: 30, name_exam: "bai thi so 3", point: 80, rank: 4, date: new Date(2019, 2, 11) },
      { id: "baithiso4", type_exam: "đọc hiểu", time: 45, time_real: 30, name_exam: "bai thi so 4", point: 100, rank: 1, date: new Date(2019, 4, 11) },
      { id: "baithiso5", type_exam: "đọc hiểu", time: 60, time_real: 30, name_exam: "bai thi so 5", point: 100, rank: 1, date: new Date(2019, 5, 23) },
      { id: "baithiso6", type_exam: "đọc hiểu", time: 60, time_real: 30, name_exam: "bai thi so 6", point: 10, rank: 100, date: new Date(2019, 6, 31) },
      { id: "baithiso7", type_exam: "đọc hiểu", time: 60, time_real: 30, name_exam: "bai thi so 7", point: 80, rank: 7, date: new Date(2019, 6, 20) },
      { id: "baithiso8", type_exam: "đọc hiểu", time: 30, time_real: 30, name_exam: "bai thi so 8", point: 100, rank: 1, date: new Date(2019, 6, 31) },
      { id: "baithiso9", type_exam: "đọc hiểu", time: 30, time_real: 30, name_exam: "bai thi so 9", point: 85, rank: 10, date: new Date(2019, 6, 31) },
      { id: "baithiso10", type_exam: "đọc hiểu", time: 45, time_real: 30, name_exam: "bai thi so 10", point: 100, rank: 1, date: new Date(2019, 7, 31) },
      { id: "baithiso11", type_exam: "đọc hiểu", time: 30, time_real: 30, name_exam: "bai thi so 11", point: 100, rank: 1, date: new Date(2019, 7, 31) },
      { id: "baithiso12", type_exam: "đọc hiểu", time: 30, time_real: 30, name_exam: "bai thi so 12", point: 100, rank: 2, date: new Date(2019, 7, 3) },
      { id: "baithiso13", type_exam: "đọc hiểu", time: 45, time_real: 30, name_exam: "bai thi so 13", point: 0, rank: 1000, date: new Date(2019, 7, 31) },
      { id: "baithiso14", type_exam: "đọc hiểu", time: 45, time_real: 30, name_exam: "bai thi so 14", point: 100, rank: 1, date: new Date(2019, 8, 14) },
      { id: "baithiso15", type_exam: "đọc hiểu", time: 45, time_real: 30, name_exam: "bai thi so 15", point: 20, rank: 50, date: new Date(2019, 8, 15) },
      { id: "baithiso16", type_exam: "đọc hiểu", time: 30, time_real: 30, name_exam: "bai thi so 16", point: 100, rank: 1, date: new Date(2019, 8, 15) },
      { id: "baithiso17", type_exam: "đọc hiểu", time: 60, time_real: 30, name_exam: "bai thi so 17", point: 90, rank: 1, date: new Date(2019, 9, 31) }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
