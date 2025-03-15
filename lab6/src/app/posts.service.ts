import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './models';
import {Photos} from './photos';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private client: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.client.get<Post[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getPost(id: number): Observable<Post>{
    return this.client.get<Post>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }

  getPhotos(id: number): Observable<Photos[]>{
    return this.client.get<Photos[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }
  
}
