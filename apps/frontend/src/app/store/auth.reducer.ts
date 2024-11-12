import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure } from './auth.actions';

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
  on(login, (state) => ({ ...state })),
  on(loginSuccess, (state, { token }) => ({ ...state, token })),
  on(loginFailure, (state, { error }) => ({ ...state, error }))
);
