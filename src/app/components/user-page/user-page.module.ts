import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainPhotoComponent } from './main-photo/main-photo.component';
import { AboutComponent } from './about/about.component';
import { AllPhotoComponent } from './all-photo/all-photo.component';
import { PostComponent } from './post/post.component';
import { GiftComponent } from './gift/gift.component';
import { FriendComponent } from './friend/friend.component';
import { GroupComponent } from './group/group.component';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';
import { UserPageComponent } from "./user-page.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    UserPageComponent
  ],
  declarations: [
    UserPageComponent,
    SidebarComponent,
    MainPhotoComponent,
    AboutComponent,
    AllPhotoComponent,
    PostComponent,
    GiftComponent,
    FriendComponent,
    GroupComponent,
    MoviesComponent,
    MusicComponent
  ]
})
export class UserPageModule { }
