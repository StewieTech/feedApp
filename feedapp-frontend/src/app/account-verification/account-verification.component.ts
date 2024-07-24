// src/app/account-verification/account-verification.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-verification',
  templateUrl: './account-verification.component.html',
  styleUrls: ['./account-verification.component.css'],
  imports: [CommonModule, FormsModule , RouterModule],
  standalone: true
})
// export class AccountVerificationComponent implements OnInit {
//   constructor(
//     private authService: AuthService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}


export class AccountVerificationComponent  {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
}


//   ngOnInit(): void {
//     const token = this.route.snapshot.queryParamMap.get('token');
//     if (token) {
//       this.authService.verifyAccount(token).subscribe(
//         response => {
//           console.log('Account verified:', response);
//         },
//         error => {
//           console.error('Verification error:', error);
//           this.router.navigate(['/login']);
//         }
//       );
//     } else {
//       this.router.navigate(['/login']);
//     }
//   }
// }
// 
