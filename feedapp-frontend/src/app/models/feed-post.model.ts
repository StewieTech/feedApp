// src/app/models/feed-post.model.ts
export interface FeedPost {
    id: string;
    content: string;
    imageUrl?: string;
    likes: number;
    comments: string[];
  }
  