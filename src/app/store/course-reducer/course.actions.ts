import { createAction, props } from '@ngrx/store';
import {Course} from '../../interfaces/course';

export const getCourses = createAction('[Courses Page] Get Courses', props<{list: any}>());
export const load = createAction('[Courses Page] Load');
