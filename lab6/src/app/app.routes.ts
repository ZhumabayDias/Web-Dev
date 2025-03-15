import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PhotosComponent } from './photos/photos.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path:'about', component:AboutComponent, title: 'About'},
    {path:'posts', component:PostsComponent, title: 'Albums'},
    {path:'posts/:id', component:PostDetailComponent, title: 'Album Detail'},
    {path:'posts/:id/:photos', component:PhotosComponent, title: 'Album Photos'},
];
