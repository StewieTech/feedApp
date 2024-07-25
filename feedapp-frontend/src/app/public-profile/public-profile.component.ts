// src/app/public-profile/public-profile.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ProfileService } from '../profile.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css'],
  imports: [CommonModule, FormsModule , RouterModule, ReactiveFormsModule],
  standalone: true
})
export class PublicProfileComponent {
  publicProfileForm: FormGroup;
  selectedImage: File | null = null;

  constructor(private fb: FormBuilder, private profileService: ProfileService) {
    this.publicProfileForm = this.fb.group({
      headline: [''],
      bio: [''],
      city: [''],
      country: ['']
    });
  }

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  onSave() {
    const formData = new FormData();
    formData.append('headline', this.publicProfileForm.get('headline')?.value || '');
    formData.append('bio', this.publicProfileForm.get('bio')?.value || '');
    formData.append('city', this.publicProfileForm.get('city')?.value || '');
    formData.append('country', this.publicProfileForm.get('country')?.value || '');
    if (this.selectedImage) {
      formData.append('image', this.selectedImage);
    }

    this.profileService.updatePublicProfile(formData).subscribe(
      response => {
        console.log('Public profile updated:', response);
      },
      error => {
        console.error('Error updating profile:', error);
      }
    );
  }
}
