import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.styl']
})
export class CourseSearchComponent implements OnInit {
  public searchValue: string;

  constructor() { }

  ngOnInit() {
  }

  public search() {
    console.log(this.searchValue);
  }

}
