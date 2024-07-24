// src/app/reset-password/reset-password.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  imports: [CommonModule, FormsModule , RouterModule],
  standalone: true
})
export class ResetPasswordComponent {
  password: string = '';
  token: string | null = '';

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.token = this.route.snapshot.queryParamMap.get('token');
  }

  onSubmit() {
    if (this.token) {
      this.authService.resetPassword(this.token, this.password).subscribe(
        response => {
          console.log('Password reset successful:', response);
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Error:', error);
        }
      );
    } else {
      console.error('Token not found');
    }
  }
}
