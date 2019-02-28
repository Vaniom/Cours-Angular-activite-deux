import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;

// la variable options sera passée à la méthode .toLocaleDateString() pour formattage de l'heure
options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

// la methode onIncrement permet d'augmenter le nombre de loveIts, de 1 unité à chaque passage.
onIncrement = () => {
  this.postLoveIts ++;
}
// La methode onDecrement permet de diminuer le nombre de loveIts de 1 unité à chaque passage.
onDecrement = () => {
  this.postLoveIts --;
}
  constructor() { }

  ngOnInit() {
  }

}
