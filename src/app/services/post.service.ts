import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Post } from '../data/post';
import { Category } from '../data/category';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postsUrl = `${environment.apiUrl}/v1/posts`;
  private categoriesUrl = `${environment.apiUrl}/v1/categories`;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.postsUrl}/${post.id}`, post);
  }

  deletePost(postId: number): Observable<void> {
    return this.http.delete<void>(`${this.postsUrl}/${postId}`);
  }

  // Nouvelle méthode pour récupérer les catégories
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }
}
