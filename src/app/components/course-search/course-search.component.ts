import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CourseService } from 'src/app/services/course-service/course-service.service';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.styl']
})
export class CourseSearchComponent implements OnInit {
  public searchValue: string;

  @Output() search = new EventEmitter<string>();

  constructor(public courseService: CourseService) { }

  ngOnInit() {
  }

  public find() {
    this.search.emit(this.searchValue);
  }
}
