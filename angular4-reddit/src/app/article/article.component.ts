import {Component, Input, OnInit} from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  @Input()
  article: Article;

  constructor() {
    this.article = new Article(
      'MYSQL相关操作',
      'http://zongjian.site/single.html?post_id=103',
      10
    );
  }
  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }
  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
