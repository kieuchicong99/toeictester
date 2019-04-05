import { ExamViewComponent } from './../exam-content/exam-view/exam-view.component';
import { HistoryExamComponent } from './../history-exam/history-exam.component';
import { UserListComponent } from '../userlist/userlist.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from './../home/home.component';
import { SignUpComponent } from './../signup/signUp.component';
import { ProfileComponent } from '../profile/profile.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToeicTestComponent } from '../toeic-test/toeic-test.component';
import { DevDetailComponent } from '../dev-detail/dev-detail.component';
import { ExamContentComponent } from '../exam-content/exam-content.component';


const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'user', component: UserListComponent },
      { path: 'profile', component: ProfileComponent },
      {
        path: 'exam', component: ExamContentComponent,
        children: [
          { path: 'view-id-exam', component: ExamViewComponent }
        ]
      },
      { path: 'history', component: HistoryExamComponent },
    ]
  },
  { path: 'toeic-tester-detail', component: ToeicTestComponent },
  { path: 'dev-detail', component: DevDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
