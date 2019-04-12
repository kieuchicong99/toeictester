import { ExamViewComponent } from '../dashboard/exam-content/exam-view/exam-view.component';
import { HistoryExamComponent } from './../history-exam/history-exam.component';
import { UserListComponent } from '../dashboard/userlist/userlist.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from './../home/home.component';
import { SignUpComponent } from './../signup/signUp.component';
import { ProfileComponent } from '../dashboard/profile/profile.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToeicTestComponent } from '../toeic-test/toeic-test.component';
import { ExamComponent } from '../dashboard/exam-content/exam.component';
import { ModalExamComponent } from '../history-exam/detail-history-exam/modal-exam/modal-exam.component';


const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'user', component: UserListComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'view-id-exam', component: ExamViewComponent },
      { path: 'view-id-examed', component: ModalExamComponent },
      
      {
        path: 'exam', component: ExamComponent,
        // children: [
        //   { path: 'view-id-exam', component: ExamViewComponent }
        // ]
      },
      { path: 'history', component: HistoryExamComponent },
    ]
  },
  { path: 'toeic-tester-detail', component: ToeicTestComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
