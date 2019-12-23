import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Subject, timer} from 'rxjs';
import {debounce, filter} from 'rxjs/operators';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.styl']
})
export class CourseSearchComponent implements OnInit {
  public searchValue: string;
  public searching$ = new Subject<string>();

  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
      this.searching$
          .pipe(
              debounce(() => timer(1000)),
              filter(query => query && query.length >= 3)
          )
          .subscribe(
              query => this.search.emit(query),
          );
  }


}

