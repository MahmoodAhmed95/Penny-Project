// app.routes.ts
import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' }, // Redirect to SignUp
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
];
