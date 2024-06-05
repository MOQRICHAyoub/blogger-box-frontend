import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { AppComponent } from './app.component';
import { AddPostComponent } from './components/post/add-post/add-post.component';

const routes: Routes = [
  { path: '', component: PostListComponent},
  { path: 'add-post', component:AddPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
