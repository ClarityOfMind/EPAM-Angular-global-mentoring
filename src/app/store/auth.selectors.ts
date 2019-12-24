import {createSelector} from '@ngrx/store';
import {AuthState} from './auth.reducers';
import {AppState} from './app.reducers';

const selectAuth = (state: AppState) => state.auth;

export const selectAuthToken = createSelector(selectAuth, (state: AuthState) => state.token);

export const selectAuthUser = createSelector(selectAuth, (state: AuthState) => state.user);
