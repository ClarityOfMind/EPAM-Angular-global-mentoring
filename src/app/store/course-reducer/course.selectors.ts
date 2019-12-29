import {createSelector} from '@ngrx/store';
import {CourseState} from './course.reducer';
import {AppState} from '../app.reducers';

const selectCourse = (state: AppState) => state.course;

export const selectCourses = createSelector(selectCourse, (state: CourseState) => state.courses);

export const selectCount = createSelector(selectCourse, (state: CourseState) => state.count);
