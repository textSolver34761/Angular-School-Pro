import { Component, OnInit } from '@angular/core';
import { Post } from '../model/interface/post';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.scss']
})
export class BlogComponentComponent implements OnInit {

  date = new Date;

  posts: Post[] = [
    {title: "Angular", content: "", loveIts: 3, created_at: this.date},
    {title: "HTML/CSS", content: "Un template, des divs et beaucoup de lignes", loveIts: 1, created_at: this.date},
    {title: "TypeScript", content: "Les possibles de l'impossible", loveIts: 1, created_at: this.date}
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
