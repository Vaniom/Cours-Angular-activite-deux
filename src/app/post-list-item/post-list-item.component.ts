import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: number;
  @Input() postElt: Post;
  @Input()i: number;

  post: Post;
  posts: Post[];
  postsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.post = new Post('', '', 0, Date.now());
    const id = this.route.snapshot.params['id'];
      }

  // la methode onIncrement permet d'augmenter le nombre de loveIts, de 1 unité à chaque passage.
  onIncrement = () => {
    this.post.loveIts ++;
  }
  // La methode onDecrement permet de diminuer le nombre de loveIts de 1 unité à chaque passage.
  onDecrement = () => {
    this.post.loveIts --;
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }
}
