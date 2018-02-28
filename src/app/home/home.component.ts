import { Component } from '@angular/core';
import { CourseComponent } from '../shared/course.component';
import { HomeService } from './home.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService] 
})
export class HomeComponent {
  TRCourse: any; 
   constructor(private _homeService: HomeService) { }  

   ngOnInit(): void { 
      this.TRCourse = this._homeService.getTopRatedCourses(); 
      console.log(this.TRCourse);
   } 
}
