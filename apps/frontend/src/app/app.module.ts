// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component'; // import components
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent, // Declare SigninComponent
    SignupComponent, // Declare SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Import the routing module
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
