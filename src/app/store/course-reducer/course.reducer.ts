import { Action, createReducer, on } from '@ngrx/store';
import { Course } from '../../interfaces/course';
import { getCourses, load } from '../course-reducer/course.actions';

export interface CourseState {
    courses: Course[];
    count: number;
}

export const initialCourseState: CourseState = {
    courses: [],
    count: 5,
};

const reducer = createReducer(
    initialCourseState,
    on(getCourses, (state: CourseState, {list}) => ({...state, courses: list})),
    on(load, (state: CourseState) => ({...state, count: state.count + 5})),
);

export function courseReducer(state: CourseState | undefined, action: Action) {
    return reducer(state, action);
}
