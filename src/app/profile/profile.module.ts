import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileChangePasswordComponent } from './profile-change-password/profile-change-password.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfileInfoComponent, ProfileChangePasswordComponent]
})
export class ProfileModule { }
