import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signUp),
      switchMap((action) =>
        this.authService.signUp(action.email, action.password).pipe(
          map((response) => AuthActions.authSuccess({ token: response.token })),
          catchError((error) => of(AuthActions.authFailure({ error })))
        )
      )
    )
  );

  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signIn),
      switchMap((action) =>
        this.authService.signIn(action.email, action.password).pipe(
          map((response) => AuthActions.authSuccess({ token: response.token })),
          catchError((error) => of(AuthActions.authFailure({ error })))
        )
      )
    )
  );
}
