import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './userlist/userlist.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard.component';
import { ExamComponent } from './exam-content/exam.component';
import { HistoryExamComponent } from './history-exam/history-exam.component';
import { ShortExamChartComponent } from './history-exam/short-exam-chart/short-exam-chart.component';
import { FullExamChartComponent } from './history-exam/full-exam-chart/full-exam-chart.component';
import { MarkExamChartComponent } from './history-exam/mark-exam-chart/mark-exam-chart.component';
import { OptionMenuComponent } from './history-exam/option-menu/option-menu.component';
import { OptionMenu1Component } from './history-exam/option-menu1/option-menu1.component';
import { DetailHistoryExamComponent } from './history-exam/detail-history-exam/detail-history-exam.component';
import { TopicComponent } from './exam-content/topic/topic.component';
import { CardTopicComponent } from './exam-content/card-topic/card-topic.component';
import { ListViewComponent } from './exam-content/topic/list-view/list-view.component';
import { ExamViewComponent } from './exam-content/exam-view/exam-view.component';
import { ListViewExamedComponent } from './exam-content/topic/list-view-examed/list-view-examed.component';
import { ModalExamComponent } from './history-exam/detail-history-exam/modal-exam/modal-exam.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonService } from '../common/common.service';
import { AppRoutingModule } from '../router/router.module';
import { ResultExamComponent } from './exam-content/result-exam/result-exam.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [

    UserListComponent,
    ProfileComponent,
    DashboardComponent,
    ExamComponent,
    HistoryExamComponent,
    ShortExamChartComponent,
    FullExamChartComponent,
    MarkExamChartComponent,
    OptionMenuComponent,
    OptionMenu1Component,
    DetailHistoryExamComponent,
    TopicComponent,
    CardTopicComponent,
    ListViewComponent,
    ExamViewComponent,
    ListViewExamedComponent,
    ModalExamComponent,
    ResultExamComponent],
  providers: [CommonService],

})
export class DashboardModule { }
