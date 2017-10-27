import { Component } from '@angular/core';
import {Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  constructor() {
    this.articles = [
      new Article('MYSQL相关操作1', 'http://zongjian.site/single.html?post_id=103', 10),
      new Article('CENTOS7部署SS-PANEL', 'http://zongjian.site/single.html?post_id=101', 5),
      new Article('TypeScript 入门指南', 'http://www.oschina.net/question/12_72250', 7)
    ];
  }

  // 添加文章
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Add article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  // 文章排序
  sortedArtcles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }


}
