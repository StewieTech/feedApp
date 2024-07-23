// src/app/forgot-password/forgot-password.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.requestPasswordReset(this.email).subscribe(
      response => {
        console.log('Password reset link sent:', response);
        this.router.navigate(['/account-verification']);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
