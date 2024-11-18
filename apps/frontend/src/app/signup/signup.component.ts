import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signUp } from '../store/auth/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  email = '';
  password = '';

  constructor(private store: Store) {}

  onSignUp() {
    this.store.dispatch(signUp({ email: this.email, password: this.password }));
  }
}
