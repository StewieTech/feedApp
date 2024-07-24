// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AccountVerificationComponent } from './account-verification/account-verification.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'account-verification', component: AccountVerificationComponent },
  { path: 'registers', component: AccountVerificationComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
