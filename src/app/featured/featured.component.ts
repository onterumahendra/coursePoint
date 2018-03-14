import { Component } from '@angular/core';
import { CourseComponent } from '../shared/course.component';
import { HomeService } from '../home/home.service';

@Component({
  templateUrl: './featured.component.html'
})
export class FeaturedComponent {
  TRCourses: any; 
   constructor(private homeService:HomeService) {}   
  
   ngOnInit(): void {
       this.homeService.getTopRatedCourses().subscribe(data => {this.TRCourses = data});

    // this.http.get('./assets/JSON/courseList.json').subscribe(data => {
    //   console.log(data);
    //   this.TRCourses = data;
    // },
    // err => {
    //   console.log("Error occured.")
    // });
  }
}
