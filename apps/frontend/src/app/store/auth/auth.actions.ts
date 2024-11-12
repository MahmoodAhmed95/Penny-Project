import { createAction, props } from '@ngrx/store';

export const signUp = createAction(
  '[Auth] Sign Up',
  props<{ email: string; password: string }>()
);
export const signIn = createAction(
  '[Auth] Sign In',
  props<{ email: string; password: string }>()
);
export const signOut = createAction('[Auth] Sign Out');
export const authSuccess = createAction(
  '[Auth] Success',
  props<{ token: string }>()
);
export const authFailure = createAction(
  '[Auth] Failure',
  props<{ error: string }>()
);
