import { Component, OnInit } from '@angular/core';
import { Post } from '../models';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-posts',
  imports: [CommonModule,RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
  posts!: Post[];
  loaded:boolean;

  constructor(private postsService: PostsService){
   this.loaded = false;
  }
  ngOnInit(): void {
    this.loaded = false;
   this.postsService.getPosts().subscribe((posts:Post[]) =>{
      this.posts = posts;
      this.loaded = true;
   })

  }
  deleteAlbum(postId:Number){
    this.posts = this.posts.filter(post => post.id !== postId);
  }
}
