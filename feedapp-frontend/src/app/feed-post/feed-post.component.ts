// src/app/feed-post/feed-post.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup , ReactiveFormsModule} from '@angular/forms';
import { FeedService } from '../feed.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-feed-post',
  templateUrl: './feed-post.component.html',
  styleUrls: ['./feed-post.component.css'],
  imports: [CommonModule, FormsModule , RouterModule, ReactiveFormsModule],
  standalone: true
})
export class FeedPostComponent {
  postForm: FormGroup;
  selectedImage: File | null = null;

  constructor(private fb: FormBuilder, private feedService: FeedService) {
    this.postForm = this.fb.group({
      content: [''],
      image: [null]
    });
  }

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('content', this.postForm.get('content')?.value || '');
    if (this.selectedImage) {
      formData.append('image', this.selectedImage);
    }

    this.feedService.createPost(formData).subscribe(
      response => {
        console.log('Post created successfully:', response);
        this.postForm.reset();
        this.selectedImage = null;
      },
      error => console.error('Error creating post:', error)
    );
  }
}
