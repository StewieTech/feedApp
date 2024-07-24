// src/app/profile/profile.component.ts
import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ProfileComponent {
  posts: any[] = [];

  constructor(private postService: PostService) {
    this.loadUserPosts();
  }

  loadUserPosts() {
    this.postService.getUserPosts('John Smith').subscribe((posts: any) => {
      this.posts = posts;
    });
  }
}
