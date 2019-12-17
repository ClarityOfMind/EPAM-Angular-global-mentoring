import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CourseService } from 'src/app/services/course-service/course-service.service';
import {Observable, Subject, timer} from 'rxjs';
import {debounce} from 'rxjs/operators';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.styl']
})
export class CourseSearchComponent implements OnInit {
  public searchValue: string;
  public searching$ = new Subject<string>()

  @Output() search = new EventEmitter<string>();

  constructor(public courseService: CourseService) { }

  ngOnInit() {
      this.searching$
          .pipe(
              debounce(() => timer(1000))
          )
          .subscribe(
              () => this.search.emit(this.searchValue),
          );
  }

  public find(data: string) {
      if (data.length > 3) {
          this.searching$.next(data);
      }
  }


}

