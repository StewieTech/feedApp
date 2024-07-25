// src/app/basic-profile/basic-profile.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-basic-profile',
  templateUrl: './basic-profile.component.html',
  styleUrls: ['./basic-profile.component.css'],
  imports: [CommonModule, FormsModule , RouterModule, ReactiveFormsModule],
  standalone: true
})
export class BasicProfileComponent {
  basicProfileForm: FormGroup;

  constructor(private fb: FormBuilder, private profileService: ProfileService) {
    this.basicProfileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      phone: ['']
    });
  }

  onSave() {
    this.profileService.updateBasicProfile(this.basicProfileForm.value).subscribe(
      response => {
        console.log('Basic profile updated:', response);
      },
      error => {
        console.error('Error updating profile:', error);
      }
    );
  }
}
