import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // on stockera dans la variable posts les données contenues dans postArray par databinding
  @Input() posts = [];
  constructor() { }

  ngOnInit() {
  }
}
