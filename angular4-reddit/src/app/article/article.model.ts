export class Article {
  votes: number;
  title: string;
  link: string;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp(): boolean {
    this.votes += 1;
    return false;
  }

  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }

  domain(): string {
    try {
      const link: string = this.link.split('//')[1];
    } catch (err) {
      return null;
    }
  }
}
