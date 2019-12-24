import {ActionReducerMap} from '@ngrx/store';
import {authReducers, AuthState, initialAuthState} from './auth.reducers';

export interface AppState {
    readonly auth: AuthState;
}

export const initialAppState: AppState = {
    auth: initialAuthState,
};

export const appReducers: ActionReducerMap<AppState, any> = {
    auth: authReducers,
};
