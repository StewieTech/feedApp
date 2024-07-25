// src/app/profile.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'https://api.example.com/profile';  // Update with your API URL

  constructor(private http: HttpClient) {}

  updateBasicProfile(profileData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/basic`, profileData);
  }

  updatePublicProfile(profileData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/public`, profileData);
  }
}
