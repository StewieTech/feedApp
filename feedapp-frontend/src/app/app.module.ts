// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AccountVerificationComponent } from './account-verification/account-verification.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthService } from './auth.service'; // Import AuthService

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
AppRoutingModule,
FormsModule,
HttpClientModule
],
providers: [AuthService], // Add AuthService here
bootstrap: [AppComponent]
})
export class AppModule { }
