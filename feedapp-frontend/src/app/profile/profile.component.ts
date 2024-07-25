// src/app/profile/profile.component.ts
import { Component, ViewChild } from '@angular/core';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, NavBarComponent]
})
export class ProfileComponent {
  @ViewChild('profileComponentRoot') 
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

// Path to the HTML template for IDE navigation
const __templateUrl__ = './profile.component.html';