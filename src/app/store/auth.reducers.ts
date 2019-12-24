import {AuthActions, EAuthActions} from './auth.actions';
import {User} from '../interfaces/user';

export interface AuthState {
    user: User;
    token: string;
}

export const initialAuthState: AuthState = {
    user: null,
    token: localStorage.getItem('token')
};

export const authReducers = (state = initialAuthState, action: AuthActions): AuthState => {
    switch (action.type) {
        case EAuthActions.SetToken:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                token: action.payload
            };
        case EAuthActions.SetUser:
            return {
                ...state,
                user: action.payload
            };
        case EAuthActions.Clear:
            localStorage.removeItem('token');
            return {
                token: null,
                user: null,
            };
        default:
            return state;
    }
};
