import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from './../home/home.component';
import { SignUpComponent } from './../signup/signUp.component';
import { ProfileComponent } from '../profile/profile.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToeicTestComponent } from '../toeic-test/toeic-test.component';
import { DevDetailComponent } from '../dev-detail/dev-detail.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
 
  { path: 'sign-in', component: SignInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'toeic-tester-detail', component: ToeicTestComponent },
  { path: 'dev-detail', component: DevDetailComponent }

];

@NgModule({ 
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
