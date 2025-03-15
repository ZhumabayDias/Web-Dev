import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Post } from '../models';
import { PostsService } from '../posts.service';
import { CommonModule } from '@angular/common';
import {Photos} from '../photos'
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule,RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit{
  post !: Post;
  photos !: Photos[];
  loaded:boolean;
  @ViewChild('myInput') myInputRef!: ElementRef;

  constructor(private route:ActivatedRoute,
      private postService:PostsService,
      private location: Location
  ){
    this.loaded = false;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postID = Number(params.get('id'));
      this.loaded = false;
      this.postService.getPost(postID).subscribe((post:Post) => {
        this.post = post;
        this.loaded = true;
       });

    });
  }

  saveTitle(){
    this.post.title = this.myInputRef.nativeElement.value;
  }

  toReturn(){
    this.location.back();
  }
}
