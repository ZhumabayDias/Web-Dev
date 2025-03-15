import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Post } from '../models';
import { PostsService } from '../posts.service';
import { CommonModule } from '@angular/common';
import {Photos} from '../photos'
import { Location } from '@angular/common';

@Component({
  selector: 'app-photos',
  imports: [RouterModule,CommonModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent implements OnInit{
  photos !: Photos[];
  loaded:boolean;

  constructor(private route:ActivatedRoute,
    private postService:PostsService,
    private location:Location
  ){
  this.loaded = false;
}
ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const postID = Number(params.get('id'));
    this.loaded = false;
     this.postService.getPhotos(postID).subscribe( (photos: Photos[]) =>{
      this.photos = photos;
      this.loaded = true;
     });
  });
}
toReturn(){
  this.location.back();
}
}

