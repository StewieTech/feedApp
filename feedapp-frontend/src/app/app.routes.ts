// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AccountVerificationComponent } from './account-verification/account-verification.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FeedTimelineComponent } from './feed-timeline/feed-timeline.component';
import { FeedPostComponent } from './feed-post/feed-post.component';
import { BasicProfileComponent } from './basic-profile/basic-profile.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'account-verification', component: AccountVerificationComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'home', component: FeedComponent },
  { path: 'myfeeds', component: ProfileComponent },
  { path: 'feed-post', component: FeedPostComponent},
  { path: 'feed-timeline', component: FeedTimelineComponent},
  { path: 'profile/basic', component: BasicProfileComponent},
  { path: 'profile/public', component: PublicProfileComponent},
  { path: 'profile', component: ProfilePageComponent}, 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
