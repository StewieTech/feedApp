// src/app/feed-timeline/feed-timeline.component.ts
import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
import { FeedPost } from '../models/feed-post.model';

@Component({
  selector: 'app-feed-timeline',
  templateUrl: './feed-timeline.component.html',
  styleUrls: ['./feed-timeline.component.css']
})
export class FeedTimelineComponent implements OnInit {
  posts: FeedPost[] = [];
  page = 1;
  pageSize = 10;
  isLoading = false;

  constructor(private feedService: FeedService) {}

  ngOnInit() {
    this.loadPosts();
    this.setupPullToRefresh();
  }

  loadPosts() {
    this.isLoading = true;
    this.feedService.getPosts(this.page, this.pageSize).subscribe(
      data => {
        this.posts = data;
        this.isLoading = false;
      },
      error => {
        console.error('Error loading posts:', error);
        this.isLoading = false;
      }
    );
  }

  setupPullToRefresh() {
    // Implement "pull to refresh" functionality if needed
  }

  loadMore() {
    this.page++;
    this.loadPosts();
  }

  likePost(postId: string) {
    this.feedService.likePost(postId).subscribe(
      response => {
        console.log('Post liked:', response);
      
      },
      error => {
        console.error('Error liking post: ',error)
      }
    );
  }

  commentOnPost(postId: string) {
    const comment = prompt("Enter your comment:");  // For simplicity, using prompt
    if (comment) {
      this.feedService.commentOnPost(postId, comment).subscribe(
        response => {
          console.log('Comment added:', response);
          // Update UI accordingly
        },
        error => {
          console.error('Error adding comment:', error);
        }
      );
    }



}
}
