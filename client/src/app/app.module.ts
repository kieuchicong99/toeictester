import { AppRoutingModule } from './router/router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SignUpComponent } from './signup/signUp.component'
import { UserListComponent } from './userlist/userlist.component'
import { CommonService } from './common/common.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ToeicTestComponent } from './toeic-test/toeic-test.component';
import { DevDetailComponent } from './dev-detail/dev-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ExamComponent } from './exam-content/exam.component';
import { DatePipeComponent } from './exam-content/date-pipe/date-pipe.component';
import { HistoryExamComponent } from './history-exam/history-exam.component';
import { ChartJsComponent } from './chart-js/chart-js.component';
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



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserListComponent,
    SignInComponent,
    ProfileComponent,
    HomeComponent,
    ToeicTestComponent,
    DevDetailComponent,
    DashboardComponent,
    FooterComponent,
    NavComponent,
    UploadFileComponent,
    ExamComponent,
    DatePipeComponent,
    HistoryExamComponent,
    ChartJsComponent,
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
    ListViewExamedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
