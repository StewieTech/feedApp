// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080'; // Need to update with the API url

  constructor(private http: HttpClient) {}

  requestPasswordReset(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/request-password-reset`, { email });
  }

  verifyAccount(token: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/auth/verify-account`, { params: { token } });
  }

  resetPassword(token: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/reset-password`, { token, password });
  }
}
