import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: number;
  @Input() post: Post;
  @Input() i: number; // data binding de la valeur de l'index, définit dans post-list.component.html

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.getPosts();
    this.postService.emitPosts();
  }

  onNewPost() {
    this.router.navigate(['/new']);
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
