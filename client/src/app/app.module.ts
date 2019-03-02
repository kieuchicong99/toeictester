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
    NavComponent
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
