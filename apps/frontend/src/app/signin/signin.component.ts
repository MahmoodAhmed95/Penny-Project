import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signIn } from '../store/auth/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent {
  email = '';
  password = '';

  constructor(private store: Store) {}

  onSignIn() {
    this.store.dispatch(signIn({ email: this.email, password: this.password }));
  }
}
