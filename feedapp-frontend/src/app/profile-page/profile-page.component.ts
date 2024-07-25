// src/app/profile-page/profile-page.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { BasicProfileComponent } from '../basic-profile/basic-profile.component';
import { PublicProfileComponent } from '../public-profile/public-profile.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  standalone: true,
  imports: [CommonModule, NavBarComponent, BasicProfileComponent, PublicProfileComponent]
})
export class ProfilePageComponent {}
