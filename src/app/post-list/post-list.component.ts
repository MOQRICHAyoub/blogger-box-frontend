import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service'; // Importez le service PostService
import { Post } from '../data/post'; // Importez l'interface Post

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = []; // Propriété pour stocker les posts

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPosts(); // Charge les posts à l'initialisation du composant
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts; // Stocke les posts dans la propriété posts
    });
  }
}
