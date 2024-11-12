import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store'; // Import StoreModule
import { AppComponent } from './app.component';
import { authReducer } from './store/auth.reducer'; // Import your reducer

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Set up NGRX store to manage auth state
    StoreModule.forRoot({ auth: authReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
