import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { cdtLoginComponent } from './cdtLogin/cdtLogin.component';
import { insLoginComponent } from './insLogin/insLogin.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CourseComponent } from './shared/course.component';
import { CourseTableComponent } from './shared/courseTable.component';
import { insCourseScheduleComponent } from './insCourseSch/insCourseSch.component';
import { HomeService } from './home/home.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'candidateLogin', component: cdtLoginComponent },
  { path: 'instituteLogin', component: insLoginComponent },
  { path: 'instituteCourseSchedules', component: insCourseScheduleComponent },
  { path: 'list', component: ListComponent },
  { path: 'details',component: DetailsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [AppComponent,cdtLoginComponent,insLoginComponent,HomeComponent,ListComponent,
    DetailsComponent,CourseComponent,insCourseScheduleComponent,CourseTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
