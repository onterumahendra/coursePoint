import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {
  TRCourses: any;
  constructor(private http: HttpClient) { }
    
  getTopRatedCourses(): Observable <any> {
    return this.http.get('./assets/JSON/courseList.json');
  }

}