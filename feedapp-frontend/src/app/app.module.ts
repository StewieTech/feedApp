// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AccountVerificationComponent } from './account-verification/account-verification.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthService } from './auth.service'; // Import AuthService
import { routes } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AccountVerificationComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot(routes) 
  ],
  providers: [AuthService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
