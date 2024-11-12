import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.authSuccess, (state, { token }) => ({
    ...state,
    token,
    error: null,
  })),
  on(AuthActions.authFailure, (state, { error }) => ({ ...state, error }))
);
