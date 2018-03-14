import { Component } from '@angular/core';
import { CourseComponent } from '../shared/course.component';
import { HomeService } from '../home/home.service';
@Component({
  templateUrl: './courseList.component.html',
  styleUrls: ['./courseList.component.css']
})
export class CourseListComponent {
  FeatureCourses: any; 
   constructor(private homeService:HomeService) {}   
  
   ngOnInit(): void {
       this.homeService.getTopRatedCourses().subscribe(data => {this.FeatureCourses = data});

  }
}
