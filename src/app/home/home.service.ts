import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }
  getTopRatedCourses(): any {
    alert("ji");
    return this.http.get('./JSON/courseList.json').map((res:Response) => res.json());
  }

}