import {ActionReducerMap} from '@ngrx/store';
import {authReducers, AuthState, initialAuthState} from './auth.reducers';
import {courseReducer, CourseState, initialCourseState} from './course-reducer/course.reducer';

export interface AppState {
    readonly auth: AuthState;
    readonly course: CourseState;
}

export const initialAppState: AppState = {
    auth: initialAuthState,
    course: initialCourseState,
};

export const appReducers: ActionReducerMap<AppState, any> = {
    auth: authReducers,
    course: courseReducer,
};
