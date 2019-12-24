import {Action} from '@ngrx/store';
import {User} from '../interfaces/user';

export enum EAuthActions {
    GetToken = '[Auth] Get Token',
    SetToken = '[Auth] Set Token',
    GetUser = '[Auth] Get User',
    SetUser = '[Auth] Set User',
    Clear = '[Auth] Clear',
}

export class GetAuthToken implements Action {
    public readonly type = EAuthActions.GetToken;
}

export class SetAuthToken implements Action {
    public readonly type = EAuthActions.SetToken;
    constructor(public payload: string) {}
}

export class GetAuthUser implements Action {
    public readonly type = EAuthActions.GetUser;
}

export class SetAuthUser implements Action {
    public readonly type = EAuthActions.SetUser;
    constructor(public payload: User) {}
}

export class ClearAuth implements Action {
    public readonly type = EAuthActions.Clear;
}

export type AuthActions = GetAuthToken | SetAuthToken | GetAuthUser | SetAuthUser | ClearAuth;
