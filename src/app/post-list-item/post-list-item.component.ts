import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

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
  @Input()i: number; // data binding de la valeur de l'index definit dans PostListComponent

  post: Post;
  posts: Post[];
  // postsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.post = new Post('', '', 0, Date.now());
    const id = this.route.snapshot.params['id'];
      }

  /**la methode onIncrement permet d'augmenter le nombre de loveIts, de 1 unité à chaque passage.
   * Elle utilise la methode updatePosts() afin de sauvegarder les modifs dans firebase*/

  onIncrement = (post: Post) => {
    post.loveIts ++;
    this.postService.updatePosts(post);
  }
  // La methode onDecrement permet de diminuer le nombre de loveIts de 1 unité à chaque passage.

  onDecrement = (post: Post) => {
    post.loveIts --;
    this.postService.updatePosts(post);
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
    this.postService.savePosts();
    this.postService.emitPosts();
  }
}
