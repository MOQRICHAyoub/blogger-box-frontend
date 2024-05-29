import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../../services/post.service';
import { Category } from '../../../data/category';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;
  categories: Category[] = [];

  constructor(private fb: FormBuilder, private postService: PostService) {
    console.log('AddPostComponent constructor');
  }

  ngOnInit() {
    console.log('AddPostComponent ngOnInit');
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      category: ['', Validators.required],
      content: ['', [Validators.required, Validators.maxLength(2500)]]
    });

    // Charger les catégories depuis le service
    this.postService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.postService.createPost(this.postForm.value).subscribe(response => {
        Swal.fire({
          title: 'Success!',
          text: 'Post Submitted Successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          // Rediriger vers la page d'accueil ou la liste des posts après succès
        });
      }, error => {
        Swal.fire({
          title: 'Error!',
          text: 'There was an error submitting the post',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
    } else {
      Swal.fire({
        title: 'Invalid Form!',
        text: 'Please review your post',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  }
}
             