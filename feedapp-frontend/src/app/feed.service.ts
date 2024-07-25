// src/app/feed.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedPost } from './models/feed-post.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private baseUrl = 'https://api.example.com/feeds';

  constructor(private http: HttpClient) {}

  createPost(postData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, postData);
  }

  getPosts(page: number, pageSize: number): Observable<FeedPost[]> {
    return this.http.get<FeedPost[]>(`${this.baseUrl}?page=${page}&size=${pageSize}`);
  }

  likePost(postId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/${postId}/like`, {});
  }

  commentOnPost(postId: string, comment: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/${postId}/comment`, { comment });
  }
}
