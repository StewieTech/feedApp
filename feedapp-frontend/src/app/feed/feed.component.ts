// src/app/feed/feed.component.ts
import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class FeedComponent {
  newPostContent: string = '';
  newPostImage: File | null = null;
  posts: any[] = [];

  constructor(private postService: PostService) {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe((posts: any) => {
      this.posts = posts;
    });
  }

  addPost() {
    const newPost = {
      user: 'John Smith',
      date: new Date().toLocaleDateString(),
      content: this.newPostContent,
      image: this.newPostImage ? URL.createObjectURL(this.newPostImage) : null
    };

    this.postService.addPost(newPost).subscribe((post: any) => {
      this.posts.unshift(post);
      this.newPostContent = '';
      this.newPostImage = null;
    });
  }

  onFileChange(event: any) {
    this.newPostImage = event.target.files[0];
  }

  loadMore() {
    this.postService.loadMorePosts().subscribe((posts: any) => {
      this.posts = this.posts.concat(posts);
    });
  }
}
