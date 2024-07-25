// src/app/post.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'https://api.example.com/posts';
  private posts: any[] = [
    {
      user: 'Alex Rodes',
      date: 'March 1, 2023',
      content: 'Some amazing artwork!',
      image: 'assets/artwork.jpg'
    },
    {
      user: 'John Smith',
      date: 'March 1, 2023',
      content: 'Enjoying the sunset with my surfboard.',
      image: 'assets/sunset.jpg'
    }
  ];

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return of(this.posts);
  }

  getUserPosts(user: string): Observable<any> {
    return of(this.posts.filter(post => post.user === user));
  }

  addPost(post: any): Observable<any> {
    this.posts.unshift(post);
    return of(post);
  }

  loadMorePosts(): Observable<any> {
    // Simulate loading more posts
    return of(this.posts);
  }
}

