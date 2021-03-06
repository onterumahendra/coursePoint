import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { cdtLoginComponent } from './cdtLogin/cdtLogin.component';
import { loginComponent } from './login/login.component';
import { signupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './courseList/courseList.component';
import { DetailsComponent } from './details/details.component';
import { CourseComponent } from './shared/course.component';
import { CourseTableComponent } from './shared/courseTable.component';
import { insCourseScheduleComponent } from './insCourseSch/insCourseSch.component';
import { HomeService } from './home/home.service';
import { FeaturedComponent } from './featured/featured.component';
import { LogoDirective } from './shared/logo.directive'


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'candidateLogin', component: cdtLoginComponent },
  { path: 'instituteLogin', component: loginComponent },
  { path: 'instituteSignUp', component: signupComponent },
  { path: 'instituteCourseSchedules', component: insCourseScheduleComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'details',component: DetailsComponent },
  { path: 'featured',component: FeaturedComponent },  
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [AppComponent,cdtLoginComponent,loginComponent,signupComponent,HomeComponent,CourseListComponent,
    DetailsComponent,CourseComponent,insCourseScheduleComponent,CourseTableComponent,FeaturedComponent,LogoDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
