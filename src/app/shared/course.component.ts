import { Component,Input } from '@angular/core';

@Component({
  selector : 'CourseList',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input('course') course : any;
   
}
